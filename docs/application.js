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
});
