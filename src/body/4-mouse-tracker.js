/*
var
        point   = svg.createSVGPoint(),
        dot  = document.querySelector('#dot'),
        line = document.querySelector('line'); 

    svg.addEventListener('mousemove',function(e){
      var loc = cursorPoint(e);
      dot.setAttribute('cx',loc.x);
      dot.setAttribute('cy',loc.y);
      rotateElement(line,75,60,loc.x,loc.y);
      console.log(loc.x, loc.y );
    },false);

    function rotateElement(el,originX,originY,towardsX,towardsY){
      var degrees = Math.atan2(towardsY-originY,towardsX-originX)*180/Math.PI + 90;
      el.setAttribute(
        'transform',
        'translate('+originX+','+originY+') rotate('+degrees+') translate('+(-originX)+','+(-originY)+')'
      );
    }

    // Get point in global SVG space
    function cursorPoint(e){
      point.x = e.clientX; 
      point.y = e.clientY;
      return point.matrixTransform(svg.getScreenCTM().inverse());
    }
*/
