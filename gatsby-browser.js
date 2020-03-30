// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const transitionDelay = 500

exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
      window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
      const savedPosition = getSavedScrollPosition(location)
      window.setTimeout(
        () => window.scrollTo(...(savedPosition || [0, 0])),
        transitionDelay
      )
  }
  return false
}
