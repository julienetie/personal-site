function buildSVGSchematics(crosses) {

  var lines, line1, line2;

  function svgSchematics(count) {
    var parentsHeight = parseInt(window.getComputedStyle(crosses[count]
        .parentNode, null).getPropertyValue("height"), 10) - 33,
      parentsWidth = parseInt(window.getComputedStyle(crosses[count]
        .parentNode, null).getPropertyValue("width"), 10);

    //Get line 
    lines = crosses[count].getElementsByTagName('line');

    line1 = lines[0];
    line1.setAttribute('x2', parentsWidth);
    line1.setAttribute('y2', parentsHeight);

    line2 = lines[1];
    line2.setAttribute('y1', parentsHeight);
    line2.setAttribute('x2', parentsWidth);

    crosses[count].setAttribute('height', parentsHeight);
    crosses[count].setAttribute('width', parentsWidth);

    crosses[count].setAttribute('viewBox', [0, 0, parentsWidth, parentsHeight]
      .join(','));

    crosses[count].setAttribute('preserveAspectRatio', 'xMidYMin');
  }

  for (var i = 0; i < crosses.length; i++) {
    svgSchematics(i);
  }
}
