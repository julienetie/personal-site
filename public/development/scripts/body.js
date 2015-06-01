//
var svg = document.getElementsByTagName('svg')[0],
  html = document.getElementById('html');


function removeElement(el) {
  el.innerHTML = '';
  el.parentNode.removeChild(el);
}


if ((Modernizr.svgfilters & Modernizr.svgforeignobject)) {
  removeElement(html);
} else {
  removeElement(svg);
  html.style.display = 'block';
}


var restoreNotification = document.getElementById('restore-view');
var restoreNotificationText = restoreNotification.getElementsByTagName('u')[0];
var restoreNotificationClose = restoreNotification.getElementsByTagName('strong')[0];

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


function closeNotification(){
 restoreNotification.classList.remove('fade-in-restore-notification');    
}


window.addEventListener('resize', resizeFun, false);
restoreNotificationText.addEventListener('click', setViewBox, false);
restoreNotificationClose.addEventListener('click', closeNotification, false);

// Need to make fonts have min size or not zoom.
