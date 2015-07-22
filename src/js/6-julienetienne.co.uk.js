/**
 * @copyright Julien Etienne 2015
 */

(function(root,g) {


var body = get('tag','body');
  var smartiesCanvas = g('#', 'smarties');
  var triangleNavigator = g('#', 'top-arrow');
  var smartiesPlaceholder = g('#', 'smarties-placeholder');
  var crosses = g('.', 'cross');
  // Attach eventListener to page
  document.addEventListener('mouseover', playExperiment, false);
  document.addEventListener('mouseout', stopExperiment, false);

  function playExperiment(e) {
    if (e.target === smartiesCanvas) {
      e.target.style.opacity = 1;
      e.target.parentNode.style.backgroundImage = 'none';
      //alert('yea');
      switchState(true);
    }
  }

  function stopExperiment(e) {
    if (e.target === smartiesCanvas) {
      //alert('yea');
      switchState(false);
    }
  }

  /**
   * SVG viewBox correction
   */

  // get SVG collection
  // for each svg
  var parentsHeight;
  var parentsWidth;
  var line;
  var line1;
  var line2;
  window.onload = function() {
    for (var i = 0; i < crosses.length; i++) {
      parentsHeight = parseInt(window.getComputedStyle(crosses[i].parentNode, null).getPropertyValue("height"), 10) - 33;
      parentsWidth = parseInt(window.getComputedStyle(crosses[i].parentNode, null).getPropertyValue("width"), 10);
      //  parentsWidth = parseInt(crosses[i].parentNode.getBoundingClientRect().width, 10);
      //Get line 
      line = crosses[i].getElementsByTagName('line');
      line1 = line[0];
      line2 = line[1];
      line1.setAttribute('x2', parentsWidth);
      line1.setAttribute('y2', parentsHeight);
      line2.setAttribute('y1', parentsHeight);
      line2.setAttribute('x2', parentsWidth);
      // crosses[i].childNodes[i].setAttribute('y2', parentsHeight);

      crosses[i].setAttribute('height', parentsHeight);
      crosses[i].setAttribute('width', parentsWidth);
      crosses[i].setAttribute('viewBox', [0, 0, parentsWidth, parentsHeight].join(','));
      crosses[i].setAttribute('preserveAspectRatio', 'xMidYMin');
    }

    headerCaretToEOL(g('#','editable'));

  };


scrollNavigator(triangleNavigator,root);
postPrintRendering();

}(window,get));
