var restoreNotification = document.getElementById('restore-view');

var viewWidth = window.innerWidth;

function setViewBox() {

  var viewWidth = window.innerWidth,
    veiwHeight = window.innerHeight;
  svg.style.width = viewWidth;
  svg.style.height = veiwHeight;

  var viewBoxInitialVals = svg.getAttribute('viewBox');
  var viewBoxArr = viewBoxInitialVals.split(' ');
  var viewRatio = viewWidth / veiwHeight;

  viewBoxArr[3] = parseInt(viewBoxArr[2] / viewRatio, 10);
  var viewBoxNewVals = viewBoxArr.join(' ');

  svg.setAttribute('viewBox', viewBoxNewVals);

  restoreNotification.classList.remove('fade-in-restore-notification');
}


setViewBox();

function resizeFun(){
    if(viewWidth !== window.innerWidth){
    restoreNotification.classList.add('fade-in-restore-notification');

}
}



window.addEventListener('resize', resizeFun, false);
restoreNotification.addEventListener('click', setViewBox, false);


// Need to make fonts have min size or not zoom.