/**
 * @copyright Julien Etienne 2015
 */

function scrollNavigator(navigator, root) {
  var arrow = navigator.childNodes[0],
    corner = 'translate3d(0px, 0px, 0px)',
    midDimensions = [root.innerWidth / 2,
      root.innerHeight / 2
    ],
    vendors = ['webkit', 'moz'];

  setInitArrow.apply(null, midDimensions);

  setTimeout(
    function() {
      root.onscroll = function(e) {
        getScrollPosition.apply(null, midDimensions);
      };
    }, 1000);

  function setInitArrow(middleWidth, middleHeight) {
    // Translate to center of window
    stylePrefix({
      el: arrow,
      style: 'transform',
      value: 'translate3d(-' + middleWidth + 'px, -' + middleHeight + 'px, 0px)'
    });
  }

  function revertToCorner(event) {
    // Need a get computed prefix
    if (arrow.style.webkitTransform !== corner) {
      navigator.style.zIndex = '-10';
    }
  }

  function getScrollPosition(middleWidth, middleHeight) {
    if (root.scrollY < screen.height) {
      navigator.style.opacity = 0;

      // Scale arrow to full size
      stylePrefix({
        el: arrow,
        style: 'transform',
        value: 'scale(1,1)'
      });

      // Translate to center of window
      setInitArrow.call(null, middleWidth, middleHeight);

      arrow.addEventListener(prefixTransitionEnd(), revertToCorner, false);

    } else {
      navigator.style.opacity = 0.7;
      navigator.style.zIndex = '10';

      // Scale arrow to a 5th
      stylePrefix({
        el: arrow,
        style: 'transform',
        value: 'scale(0.2,0.2)'
      });

      // Translate to corner
      stylePrefix({
        el: arrow,
        style: 'transform',
        value: corner
      });


    }

  }
  getScrollPosition.apply(null, midDimensions);
}
