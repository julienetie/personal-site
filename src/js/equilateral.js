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
        innerHypotenuse = halfSide * (1 / Math.cos(30 * pi / 180)),

        // SqRt(Hyp^2 - Adj^2) pythagoras
        innerOpposite = halfSide * (1 / Math.tan(60 * pi / 180)),

        leftVertex = [],
        rightVertex = [],
        topVertex = [];

    leftVertex[0] = cen[0] - halfSide;
    leftVertex[1] = cen[1] + innerOpposite;

    rightVertex[0] = cen[0] + halfSide;
    rightVertex[1] = cen[1] + innerOpposite;

    topVertex[0] = cen[0];
    topVertex[1] = cen[1] - innerHypotenuse;

    points = topVertex[0] + ',' + topVertex[1] +
        ' ' + rightVertex[0] + ',' + rightVertex[1] +
        ' ' + leftVertex[0] + ',' + leftVertex[1];

    parentNode.appendChild(polygon);
    polygon.setAttribute('points', points);
    polygon.setAttribute('id', 'equilateral');

    return polygon;
}
