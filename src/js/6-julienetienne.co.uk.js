/**
 * @copyright Julien Etienne 2015
 */

(function(root, g) {

  var body = g('tag', 'body'),
    smartiesCanvas = g('#', 'smarties'),
    triangleNavigator = g('#', 'top-arrow'),
    smartiesPlaceholder = g('#', 'smarties-placeholder'),
    svgCrossElements = g('.', 'cross'),
    header = g('#', 'top'),
    tri = g('#', 'top-arrow').getElementsByTagName('a')[0],
    logo = g('#', 'logo');
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

  function setLogoSizeAndPosition(element, size) {
    var realWidth = window.innerWidth;
    var realHeight = window.innerHeight;
    size = 100 / size;
    var logoSize;

    logoSize = realWidth < realHeight ? realWidth : realHeight;
    element.style.color = 'yellow';
    element.style.fontSize = logoSize / size + 'em';
    var mgVal = (logoSize / 768) * 16 + 'px ';
    element.style.padding = '0';
    //    alert(logoWidth + ' ' + element);
  }


  function setLogoSize(logoElement, factor) {
    var logoSize,
      logoHolder = logoElement.parentNode,
      screenArea = (screen.width * screen.height) / 1000,
      windowArea = (window.innerWidth * window.innerHeight) / 1000,

      mobileArea = 304.704;
    var isMobile = screen.width <= 736 || screen.height <= 736 ?
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

    logoHolder.setAttributeNS(null, 'width', logoSize);
    logoHolder.setAttributeNS(null, 'height', logoSize);
  }


  /**
   * SVG viewBox correction
   */

  // get SVG collection
  // for each svg

  window.onload = function() {
    buildSVGSchematics(svgCrossElements);
    setLogoSize(logo, opt.logoSize);

    if (screen.width > 736) {
      headerCaretToEOL(g('#', 'editable'));
    } else {
      header.removeAttribute("contenteditable");
      setLogoSizeAndPosition(tri, 3);
    }
  };



  resizilla.call(window, function() {
    buildSVGSchematics(svgCrossElements);
    var screenWidth = screen.width < screen.height ?
      screen.width : screen.height;
    if (screenWidth > 736) {
      setLogoSize(logo, opt.logoSize);
    }
  }, 250, false);


  scrollNavigator(triangleNavigator, root);
  postPrintRendering();

}(window, get));
