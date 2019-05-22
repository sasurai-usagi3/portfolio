window.addEventListener('load', () => {
  const linksToSection = document.querySelectorAll('.js-link-to-section');
  const btnsToOpenAndCloseList = document.querySelectorAll('.js-btn-to-open-and-close-list');

  linksToSection.forEach(elm => {
    elm.addEventListener('click', e => {
      const target = e.currentTarget;
      const targetToScroll = document.getElementById(target.getAttribute('href').slice(1));

      e.preventDefault();
      anime({
        targets: 'html',
        scrollTop: targetToScroll.getBoundingClientRect().top + window.pageYOffset,
        easing: 'linear',
        duration: 500
      });
    });
  });

  btnsToOpenAndCloseList.forEach(elm=> {
    elm.addEventListener('click', e => {
      const target = e.currentTarget;
      const targetToOpenOrClose = document.getElementById(target.dataset.target);
      const status = target.dataset.status;

      if (status === 'close') {
        height = '625vh';
        target.dataset.status = 'open';
      } else if (status === 'open') {
        height = '250vh';
        target.dataset.status = 'close';
      }

      anime({
        targets: targetToOpenOrClose,
        height: height,
        easing: 'linear',
        duration: 2000
      });
    });
  });
});
