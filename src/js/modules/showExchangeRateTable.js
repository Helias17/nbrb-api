import { getBYRCurrentExchangeRate } from './getBYRCurrentExchangeRate';
import { showAnimatedLoader, hideAnimatedLoader } from './animatedLoader';
import { readExchangeRatesFromLocalStorage } from './readExchangeRatesFromLocalStorage';

const ratesTableHeader = `
<div class="exchangeRates">
<div class="exchangeRates__head">
  <div class="exchangeRates__row">
    <div class="exchangeRates__cell">
      Foreign currency name
    </div>
    <div class="exchangeRates__cell">
      Currency abbreviation and scale
    </div>
    <div class="exchangeRates__cell">
      Official rate
    </div>
  </div>
</div>
<div class="exchangeRates__body">
`;

const ratesTableFooter = `
  </div>
</div>
`;

export const showExchangeRateTable = async () => {
  const appEl = document.querySelector('.app');

  let ratesBodyHtml = '';
  // localStorage.clear();

  let exchangeRates = readExchangeRatesFromLocalStorage();

  const nowDate = new Date();
  let month = nowDate.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = nowDate.getDate();
  day = day < 10 ? `0${day}` : day;
  const stringNowDate = `${nowDate.getFullYear()}-${month}-${day}`;

  if (!exchangeRates
    || !Array.isArray(exchangeRates)
    || !exchangeRates[0].Date.includes(stringNowDate)
  ) {
    await showAnimatedLoader();
    exchangeRates = await getBYRCurrentExchangeRate();
    await hideAnimatedLoader();
  }

  if (exchangeRates && Array.isArray(exchangeRates)) {
    ratesBodyHtml = exchangeRates.reduce((html, rateItem) => (`${html}
    <div class="exchangeRates__row">
      <div class="exchangeRates__cell">
        ${rateItem.Cur_Name}
      </div>
      <div class="exchangeRates__cell">
        ${rateItem.Cur_Scale} ${rateItem.Cur_Abbreviation}
      </div>
      <div class="exchangeRates__cell">
        ${rateItem.Cur_OfficialRate}
      </div>
    </div>
      `), '');

    const regex = /^\d*-\d*-\d*/;
    const parsedDate = regex.exec(exchangeRates[0].Date);
    const ratesDate = `<p class="ratesDate">${parsedDate[0]}</div>`;
    const ratesTableHtml = ratesDate + ratesTableHeader + ratesBodyHtml + ratesTableFooter;
    appEl.insertAdjacentHTML('beforeend', ratesTableHtml);
  } else {
    appEl.insertAdjacentHTML('beforeend', 'Exchange rates were not loaded');
  }
};
