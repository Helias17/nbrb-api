const appEl = document.querySelector('.app');

export const showAnimatedLoader = () => {
  const animatedLoaderHtml = `
  <div class="animatedLoader">
    <div class="animatedLoader__image"></div>
    <div class="animatedLoader__text">Loading exchange rates...</div>
  </div>
  `;

  appEl.classList.add('app_flexCenter');
  appEl.insertAdjacentHTML('afterbegin', animatedLoaderHtml);
};

export const hideAnimatedLoader = () => {
  appEl.classList.remove('app_flexCenter');

  const animatedLoaderEl = document.querySelector('.animatedLoader');
  animatedLoaderEl.classList.add('animatedLoader_hidden');
};
