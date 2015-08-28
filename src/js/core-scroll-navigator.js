/**
 * @copyright Julien Etienne 2015
 */
function scrollNavigator(navigator, root, prefix) {
  var transformName = prefix('transform'),
    arrow = navigator.children[0],
    corner = 'translate3d(0px, 0px, 0px)',
    midDimensions = [root.innerWidth / 2,
      root.innerHeight / 2
    ],
    vendors = ['webkit', 'moz'];
  console.log(navigator);

  setInitArrow.apply(null, midDimensions);

  setTimeout(
    function() {
      root.onscroll = function(e) {
        getScrollPosition.apply(null, midDimensions);
      };
    }, 1000);

  function setInitArrow(middleWidth, middleHeight) {
    arrow.style[transformName] = 'translate3d(-' + middleWidth + 'px, -' + middleHeight + 'px, 0)';
  }

  function revertToCorner(event) {
    // Need a get computed prefix
    if (arrow.style[transformName] !== corner) {
      navigator.style.zIndex = '-10';
    }
  }

  function getScrollPosition(middleWidth, middleHeight) {
    if (root.scrollY < screen.height) {
      navigator.style.opacity = 0;

      // Translate to center of window
      setInitArrow.call(null, middleWidth, middleHeight);

      arrow.addEventListener(prefixTransitionEnd(arrow), revertToCorner, false);

    } else {
      navigator.style.opacity = 0.7;
      navigator.style.zIndex = '10';

      arrow.style[transformName] = corner;

    }

  }
  getScrollPosition.apply(null, midDimensions);
}
