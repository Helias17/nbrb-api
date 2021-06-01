import './styles/index.scss';
import { showAnimatedLoader, hideAnimatedLoader } from './js/modules/animatedLoader';
import { readExchangeRatesFromLocalStorage } from './js/modules/readExchangeRatesFromLocalStorage';
import { getBYRCurrentExchangeRate } from './js/modules/getBYRCurrentExchangeRate';

showAnimatedLoader();

let exchangeRates = readExchangeRatesFromLocalStorage();

if (exchangeRates) {
  console.log(exchangeRates);
} else {
  exchangeRates = getBYRCurrentExchangeRate();
}
