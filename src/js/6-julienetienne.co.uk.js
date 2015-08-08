/**
 * @copyright Julien Etienne 2015
 */

(function(root, g) {

  var body = g('tag', 'body');
  var smartiesCanvas = g('#', 'smarties');
  var triangleNavigator = g('#', 'top-arrow');
  var smartiesPlaceholder = g('#', 'smarties-placeholder');
  var svgCrossElements = g('.', 'cross');
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

  window.onload = function() {
    buildSVGSchematics(svgCrossElements);
    headerCaretToEOL(g('#', 'editable'));
  };

  window.addEventListener('resize', function() {
    buildSVGSchematics(svgCrossElements);
  }, false);


  scrollNavigator(triangleNavigator, root);
  postPrintRendering();

}(window, get));
