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

    viewBox: {
      x: 0,
      y: 0,
      width: 1000,
      height: 500
    },

    preserveAspectRatio: {
      align: 'xMidYMid',
      meetOrSlice: 'meet'
    },

    backgroundColor: 'rgba(17,47,61,0.8)'

  };


// Grid
esc.grid = {

  development: 1,
  horizontal: 10,
  vertical: 20

// Need to add metric options 
};

(function(esc, gridOptions) {

  // ViewBox Defaults
  esc.viewBox.x = esc.viewBox.x || 0;
  esc.viewBox.y = esc.viewBox.y || 0;
  esc.viewBox.width = esc.viewBox.width || 1000;
  esc.viewBox.height = esc.viewBox.height || 500;
  // PreserveAspectRatio Defaults
  esc.preserveAspectRatio.align = esc.preserveAspectRatio.align || 'xMidYMid';
  esc.preserveAspectRatio.meetOrSlice = esc.preserveAspectRatio.meetOrSlice || 'meet';
  // Background Color Defaults
  esc.backgroundColor = esc.backgroundColor || 'rgba(30,235,170,0.8)';




  // Chain setAttributes
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

    function setSVG() {
      getViewDimensions();
      svg.style.width = view.width;
      svg.style.height = view.height;

      //   var viewBoxInitialVals = svg.getAttribute('viewBox');
      //   viewBoxArr = viewBoxInitialVals.split(' '),
      //viewRatio = view.width / view.height;
      //viewBoxArr[2] = esc.xUnits;
      //viewBoxArr[3] = esc.yUnits;

      //ViewBox
      viewBoxArr = [esc.viewBox.x, esc.viewBox.y, esc.viewBox.width, esc.viewBox.height];
      var viewBoxNewVals = viewBoxArr.join(' ');
      svg.setAttribute('viewBox', viewBoxNewVals);


      // preserveAspectRatio
      preserveAspectRatioArr = [esc.preserveAspectRatio.align, esc.preserveAspectRatio.meetOrSlice];
      var preserveAspectRatioNewVals = preserveAspectRatioArr.join(' ');
      svg.setAttribute('preserveAspectRatio', preserveAspectRatioNewVals);

      // Background color
      svg.style.backgroundColor = esc.backgroundColor;

      // Display block tightly-coupled 
      svg.style.display = 'block';

      // Notification
      restoreNotification.classList.remove('fade-in-restore-notification');
    }
    setSVG();

    function resizeFun() {
      if (view.width !== window.innerWidth || view.height !== window.innerWidth) {
        restoreNotification.classList.add('fade-in-restore-notification');

      }
    }


    function closeNotification() {
      restoreNotification.classList.remove('fade-in-restore-notification');
    }


    window.addEventListener('resize', resizeFun, false);
    restoreNotificationText.addEventListener('click', setSVG, false);
    restoreNotificationClose.addEventListener('click', closeNotification, false);

  }

  function createNS(type) {
    var namespace = 'http://www.w3.org/2000/svg';
    return document.createElementNS(namespace, type);
  }


  function grid() {
    // Enable Development
    if (esc.grid.development) {
      //defaults
      esc.grid.horizontal = esc.grid.horizontal || 10;
      esc.grid.vertical = esc.grid.vertical || 20;
      esc.grid.development = esc.grid.development || false;


      var gridline,
        gridIncrement,
        textNode;
      var gridlines = document.getElementById("gridlines");
      // Build X gridlines group
      var xGridlines = createNS('g').attr('name', 'x-gridlines');
      gridlines.appendChild(xGridlines);
      // Build Y gridlines group
      var yGridlines = createNS('g').attr('name', 'y-gridlines');
      gridlines.appendChild(yGridlines);
      // Build Metrics group
      var metrics = createNS('g').attr('name', 'metrics');
      gridlines.appendChild(metrics);
      // Build X Paths 
      for (var i = 0; i < esc.grid.horizontal + 1; i++) {
        gridIncrement = i * esc.viewBox.height / esc.grid.horizontal;
        gridline = createNS('path');
        gridline
          .attr('d', 'M -1000 ' + gridIncrement + ' L 2000 ' + gridIncrement)
          .attr("stroke", "#00FFD0")
          .attr("stroke-width", "1")
          .attr("stroke-dasharray", "2, 5");
        xGridlines.appendChild(gridline);
      }


      // Build Y Paths 
      for (i = 0; i < esc.grid.vertical + 1; i++) {
        gridIncrement = i * esc.viewBox.width / esc.grid.vertical;
        gridline = createNS('path');
        gridline
          .attr('d', 'M ' + gridIncrement + ' -500, L ' + gridIncrement + ' 1000')
          .attr("stroke", "lightblue")
          .attr("stroke-width", "1")
          .attr("stroke-dasharray", "2, 5");
        yGridlines.appendChild(gridline);
      }

      //Metrics
      for (i = 0; i < esc.grid.vertical + 1; i++) {
        gridIncrement = i * esc.viewBox.width / esc.grid.vertical;
        unitText = createNS('text');
        textNode = document.createTextNode(gridIncrement);
        unitText
          .attr('x', gridIncrement + 5)
          .attr('y', 10)
          .attr('style', 'font-family: sans-serif; font-size  : 10;')
          .attr('fill', 'rgba(255,255,255,0.6)');
        unitText.appendChild(textNode);
        metrics.appendChild(unitText);
      }

      //Metrics
      for (i = 1; i < esc.grid.horizontal + 1; i++) {
        gridIncrement = i * esc.viewBox.height / esc.grid.horizontal;
        unitText = createNS('text');
        textNode = document.createTextNode(gridIncrement);
        unitText
          .attr('x', 5)
          .attr('y', gridIncrement -5)
          .attr('style', 'font-family: sans-serif; font-size  : 10;')
          .attr('fill', 'rgba(255,255,255,0.6)');
        unitText.appendChild(textNode);
        metrics.appendChild(unitText);
      }
    }
  }



  return {
    viewBoxEngine: viewBoxEngine(),
    grid: grid()
  };

}(esc, esc.grid));
// make fonts have min size or not zoom.

// Enable Grid
