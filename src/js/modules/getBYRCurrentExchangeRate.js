import { saveExchangeRatesToLocalStorage } from './saveExchangeRatesToLocalStorage';

const controller = new AbortController();
const { signal } = controller;

export const getBYRCurrentExchangeRate = async () => {
  try {
    const timerID = setTimeout(() => controller.abort(), 5000);

    const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0', { signal });
    clearTimeout(timerID);

    console.log('Rates fetched from https://www.nbrb.by...');

    if (response.ok) {
      const exchangeRates = await response.json();
      saveExchangeRatesToLocalStorage(exchangeRates);
      return exchangeRates;
    }
    console.log(`nbrb.by API error: ${response.status}`);
    return null;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
  return null;
};
