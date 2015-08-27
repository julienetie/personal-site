/**
 * Creates an equalateral triangle inside a given SVG parent node.
 * @Author Julien Etienne - 2015
 * @param  {Number} sideLength     - Length of side
 * @param  {Array} centerPosition  - central position the of triangle.
 * @param  {Object} parentNode     - The parentNode of the new triangle.
 * @return {Object}                - The polygon element.
 */
function equilateral(sideLength, centerPosition, parentNode) {
    var points,
        pi = 3.141592653589793238462643383, // more accuracy
        ns = 'http://www.w3.org/2000/svg',
        cen = centerPosition,
        halfSide = sideLength / 2,
        polygon = document.createElementNS(ns, 'polygon'),

        // Inner innerHypotenuse angle = 120, hyp = half side. Cos 120 * adjacent 
        innerHypotenuse = halfSide * (1 / Math.cos(30 * pi / 180));

    // SqRt(Hyp^2 - Adj^2) pythagoras
    innerOpposite = halfSide * (1 / Math.tan(60 * pi / 180));

    this.leftVertex = [];
    this.rightVertex = [];
    this.topVertex = [];

    this.leftVertex[0] = cen[0] - halfSide;
    this.leftVertex[1] = cen[1] + innerOpposite;

    this.rightVertex[0] = cen[0] + halfSide;
    this.rightVertex[1] = cen[1] + innerOpposite;

    this.topVertex[0] = cen[0];
    this.topVertex[1] = cen[1] - innerHypotenuse;

    points = this.topVertex[0] + ',' + this.topVertex[1] +
        ' ' + this.rightVertex[0] + ',' + this.rightVertex[1] +
        ' ' + this.leftVertex[0] + ',' + this.leftVertex[1];
    parentNode.appendChild(polygon);
    polygon.setAttribute('points', points);
    polygon.setAttribute('id', 'equilateral');  
    
    return polygon;
}
