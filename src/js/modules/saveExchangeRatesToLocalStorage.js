export const saveExchangeRatesToLocalStorage = (ratesArr) => {
  if (Array.isArray(ratesArr) && ratesArr.length) {
    localStorage.setItem('nbrn-byr-rates', JSON.stringify(ratesArr));
  }
};
