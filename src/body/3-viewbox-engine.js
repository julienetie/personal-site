(function(esc, gridOptions) {

  // Defaults
  esc.viewBox.x = esc.viewBox.x || 0;
  esc.viewBox.y = esc.viewBox.y || 0;
  esc.viewBox.width = esc.viewBox.width || 1000;
  esc.viewBox.height = esc.viewBox.height || 500;

  esc.preserveAspectRatio.align = esc.preserveAspectRatio.align || 'xMidYMid';
  esc.preserveAspectRatio.meetOrSlice = esc.preserveAspectRatio.meetOrSlice || 'meet';





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

    //defaults



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
    for (var i = 0; i < 11; i++) {
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
