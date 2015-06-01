function setViewBox() {

  var viewWidth = window.innerWidth,
    veiwHeight = window.innerHeight;
  svg.style.width = viewWidth;
  svg.style.height = '100vh';

  var viewBoxInitialVals = svg.getAttribute('viewBox');
  var viewBoxArr = viewBoxInitialVals.split(' ');
  var viewRatio = viewWidth / veiwHeight;

  viewBoxArr[3] = parseInt(viewBoxArr[2] / viewRatio, 10);
  var viewBoxNewVals = viewBoxArr.join(' ');

  svg.setAttribute('viewBox', viewBoxNewVals);
  console.log(viewWidth);
}
setViewBox();

window.addEventListener('resize', setViewBox, false);
