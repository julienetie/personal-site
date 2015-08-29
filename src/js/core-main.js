/**
 * @copyright Julien Etienne 2015
 */

(function(root, linkParent, pageTop) {

  var linkToTop = linkParent.children[0];

  function setupExperiments() {
    var experiment;
    document.addEventListener('mouseover', playExperiment, false);
    document.addEventListener('mouseout', stopExperiment, false);

    function playExperiment(e) {
      experiment = e.target.getAttribute('data-experiment');
      if (experiment) {
        e.target.style.opacity = 1;
        e.target.parentNode.style.backgroundImage = 'none';
        switchState[experiment](true);
      }
    }

    function stopExperiment(e) {
      experiment = e.target.getAttribute('data-experiment');
      if (experiment) {
        switchState[experiment](false);
      }
    }
  }



  function setLogoSizeAndPosition(element, size) {
    var realWidth = window.innerWidth;
    var realHeight = window.innerHeight;
    var logoSize, mgVal;

    size = 100 / size;
    logoSize = realWidth < realHeight ? realWidth : realHeight;

    mgVal = (logoSize / 768) * 16 + 'px ';
    element.style.padding = '0';
  }


  function setLogoSize(logoElement, factor) {
    var logoSize,
      logoHolder = logoElement.parentNode,
      screenArea = (screen.width * screen.height) / 1000,
      windowArea = (window.innerWidth * window.innerHeight) / 1000,
      mobileArea = 304.704,
      isMobile = screen.width <= 736 || screen.height <= 736 ?
      true : false;
    //
    if (screenArea <= mobileArea && isMobile) {
      logoSize = parseInt(windowArea / (factor / 6), 10);
      //  alert('windowARea: ' + windowArea);
    } else {
      logoSize = windowArea / factor;
      logoSize = logoSize < 55 ? 55 : parseInt(logoSize, 10);
      // alert(logoSize);
    }

    linkToTop.style.width = logoSize;
    linkToTop.style.height = logoSize;
  }




  window.onload = function() {
    buildSVGSchematics(svgSchematics);
    setLogoSize(logo, opt.logoSize);
    setupExperiments();
applicationCacheControl();
    if (screen.width >= 1024 || screen.width === undefined) {
      caretToEndOfLine(get('#', 'editable'));
    } else {
      pageTop.removeAttribute("contenteditable");
      setLogoSizeAndPosition(linkToTop, 3);
    }
  };


  resizilla.call(window, function() {
    buildSVGSchematics(svgSchematics);
    var screenWidth = screen.width < screen.height ?
      screen.width : screen.height;
    if (screenWidth > 736) {
      setLogoSize(logo, opt.logoSize);
    }
  }, 250, false);


  scrollNavigator(linkParent, root, detectCSS);
  postPrintRendering();

}(window, topArrow, header));


function applicationCacheControl() {
  // Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);
}
