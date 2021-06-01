export const readExchangeRatesFromLocalStorage = () => {
  const exchangeRatesFromLS = localStorage.getItem('nbrn-byr-rates');

  try {
    const exchangeRates = JSON.parse(exchangeRatesFromLS);

    if (Array.isArray(exchangeRates) && exchangeRates.length) {
      return exchangeRates;
    }
    return null;
  } catch (err) {
    console.log('Error during JSON.parse of localStorage nbrn-byr-rates ');
    console.log(err.name);
    console.log(err.message);
    return null;
  }
};
