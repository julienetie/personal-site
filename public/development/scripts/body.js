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

// Need to add classList

// Escape
var 
esc = esc || {
xUnits: 1000,
yUnits: 500

};
// Grid
esc.grid = {
  horizontal: 10,
  vertical: 10
};


(function(esc, gridOptions) {

  // Chain Attributes
  Object.prototype.attr = function() {
    this.setAttributeNS(null, arguments[0], arguments[1]);
    return this;
  };

  function viewBoxEngine() {
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
   //   viewBoxArr = viewBoxInitialVals.split(' '),
        //viewRatio = view.width / view.height;
        //viewBoxArr[2] = esc.xUnits;
        //viewBoxArr[3] = esc.yUnits;
        viewBoxArr = [ 0, 0, esc.xUnits, esc.yUnits];
      var viewBoxNewVals = viewBoxArr.join(' ');
      svg.setAttribute('viewBox', viewBoxNewVals);
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

  }

  function createNS(type) {
    var namespace = 'http://www.w3.org/2000/svg';
    return document.createElementNS(namespace, type);
  }


  function grid() {


    var gridline,
      gridIncrement;
    var gridlines = document.getElementById("gridlines");
    // Build X gridlines group
    var xGridlines = createNS('g').attr('name', 'x-gridlines');
    gridlines.appendChild(xGridlines);
    // Build Y gridlines group
    var yGridlines = createNS('g').attr('name', 'y-gridlines');
    gridlines.appendChild(yGridlines);
    // Build X Paths 
    for (var i = 0; i < 10; i++) {
      gridIncrement = i * 50;
      gridline = createNS('path');
      gridline.attr('d', 'M -1000 ' + gridIncrement + ' L 2000 ' + gridIncrement).attr("stroke", "lightblue").attr("stroke-width", "1");
      xGridlines.appendChild(gridline);
    }
    // Build Y Paths 
    for (var i = 0; i < 11; i++) {
      gridIncrement = i * 100;
      gridline = createNS('path');
      gridline.attr('d', 'M ' + gridIncrement + ' -500, L ' + gridIncrement + ' 1000').attr("stroke", "lightblue").attr("stroke-width", "1");
      yGridlines.appendChild(gridline);
    }
    //   var gridline = createNS('path');
    //   gridline.attr("d", "M -1000 250 L 2000 250").attr("stroke", "red").attr("stroke-width", "5");
    //   gridlines.appendChild(gridline);

    console.log(gridOptions.horizontal, gridOptions.vertical);
  }



  return {
    viewBoxEngine: viewBoxEngine(),
    grid: grid()
  };

}(esc, esc.grid));
// make fonts have min size or not zoom.

// Enable Grid
