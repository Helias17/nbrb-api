import './styles/index.scss';
import { readExchangeRatesFromLocalStorage } from './js/modules/readExchangeRatesFromLocalStorage';
import { getBYRCurrentExchangeRate } from './js/modules/getBYRCurrentExchangeRate';

let exchangeRates = readExchangeRatesFromLocalStorage();

if (exchangeRates) {
  console.log(exchangeRates);
} else {
  exchangeRates = getBYRCurrentExchangeRate();
}
