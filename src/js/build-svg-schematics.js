function buildSVGSchematics(crosses) {

  var lines, line1, line2;

  function svgSchematics(count) {
    this.parentsHeight = parseInt(window.getComputedStyle(crosses[count].parentNode, null).getPropertyValue("height"), 10) - 33;
    this.parentsWidth = parseInt(window.getComputedStyle(crosses[count].parentNode, null).getPropertyValue("width"), 10);

    //Get line 
    lines = crosses[count].getElementsByTagName('line');
    line1 = lines[0];
    line2 = lines[1];
    line1.setAttribute('x2', this.parentsWidth);
    line1.setAttribute('y2', this.parentsHeight);
    line2.setAttribute('y1', this.parentsHeight);
    line2.setAttribute('x2', this.parentsWidth);
    // crosses[i].childNodes[i].setAttribute('y2', this.parentsHeight);

    crosses[count].setAttribute('height', this.parentsHeight);
    crosses[count].setAttribute('width', this.parentsWidth);
    crosses[count].setAttribute('viewBox', [0, 0, this.parentsWidth, this.parentsHeight].join(','));
    crosses[count].setAttribute('preserveAspectRatio', 'xMidYMin');
  }
  for (var i = 0; i < crosses.length; i++) {
    svgSchematics(i);
  }
}

