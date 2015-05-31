//
var svg = document.getElementsByTagName('svg')[0],
    html = document.getElementById('html');
if((Modernizr.svgfilters & Modernizr.svgforeignobject)){
  html.innerHTML = '';

}
else{
  svg.innerHTML = '';
  svg.parentNode.removeChild(svg);
  html.style.display = 'block';
}
