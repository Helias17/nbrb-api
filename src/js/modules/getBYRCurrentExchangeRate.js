import { saveExchangeRatesToLocalStorage } from './saveExchangeRatesToLocalStorage';

export const getBYRCurrentExchangeRate = async () => {
  const response = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
  if (response.ok) {
    const exchangeRates = await response.json();
    saveExchangeRatesToLocalStorage(exchangeRates);
    return exchangeRates;
  }
  console.log(`nbrb.by API error: ${response.status}`);
  return null;
};
