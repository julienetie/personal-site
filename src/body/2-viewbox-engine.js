

var restoreNotification = document.getElementById('restore-view'),
  restoreNotificationText = restoreNotification.getElementsByTagName('u')[0],
  restoreNotificationClose = restoreNotification.getElementsByTagName('strong')[0];

var view;


function getViewDimensions() {
  view = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  return view;
}
getViewDimensions();


function setViewBox() {
  getViewDimensions();
  svg.style.width = view.width;
  svg.style.height = view.height;
  var viewBoxInitialVals = svg.getAttribute('viewBox');
 // viewBoxArr = viewBoxInitialVals.split(' '),
    //viewRatio = view.width / view.height;
  //viewBoxArr[3] = parseInt(viewBoxArr[2] / viewRatio, 10);
 //var viewBoxNewVals = viewBoxArr.join(' ');
 //svg.setAttribute('viewBox', viewBoxNewVals);
  restoreNotification.classList.remove('fade-in-restore-notification');
}
setViewBox();


function resizeFun() {
  if (view.width !== window.innerWidth || view.height !== window.innerWidth) {
    restoreNotification.classList.add('fade-in-restore-notification');

  }
}


function closeNotification() {
  restoreNotification.classList.remove('fade-in-restore-notification');
}


window.addEventListener('resize', resizeFun, false);
restoreNotificationText.addEventListener('click', setViewBox, false);
restoreNotificationClose.addEventListener('click', closeNotification, false);

// make fonts have min size or not zoom.
