
    /*  Constants: */ 
    var svgViewBoxWidth  = window.innerWidth; // The original width value of the viewBox attribute for the svg element.
    var svgViewBoxHeight = window.innerHeight; // The original height value of the viewBox attribute for the svg element.
    var leftArrow        = 37;  // The numeric code for the left arrow key.
    var upArrow          = 38;
    var rightArrow       = 39;
    var downArrow        = 40;
    var panRate          = 10;  // Number of pixels to pan per key press.    
    var zoomRate         = 1.1; // Must be greater than 1. Increase this value for faster zooming (i.e., less granularity).

    /* Globals: */
    var svgViewPort;
    
    var page = document.getElementsByClassName('page')[0];
        var pageWidth = page.getAttribute('width');
        var pageHeight = page.getAttribute('height');
        page.setAttribute('x', (svgViewBoxWidth - pageWidth) / 2 );
        page.setAttribute('y', (svgViewBoxHeight - pageHeight) / 2 );
    function zoom(zoomType)
    {
      var viewBox = svgViewPort.getAttribute('viewBox');  // Grab the object representing the SVG element's viewBox attribute.
      var viewBoxValues = viewBox.split(' ');       // Create an array and insert each individual view box attribute value (assume they're seperated by a single whitespace character).


      viewBoxValues[2] = parseFloat(viewBoxValues[2]);    // Convert string "numeric" values to actual numeric values.
      viewBoxValues[3] = parseFloat(viewBoxValues[3]);
      console.log(viewBox);
      if (zoomType === 'zoomIn')
      {
        viewBoxValues[2] /= zoomRate; // Decrease the width and height attributes of the viewBox attribute to zoom in.
        viewBoxValues[3] /= zoomRate; 
      }
      else if (zoomType === 'zoomOut')
      {
        viewBoxValues[2] *= zoomRate; // Increase the width and height attributes of the viewBox attribute to zoom out.
        viewBoxValues[3] *= zoomRate; 
      }
      else
        alert("function zoom(zoomType) given invalid zoomType parameter.");
      
      svgViewPort.setAttribute('viewBox', viewBoxValues.join(' ')); // Convert the viewBoxValues array into a string with a white space character between the given values.
      
      var currentZoomFactor = svgViewBoxWidth / viewBoxValues[2];                   // Calculates the current zoom factor, could have just as easily used svgViewBoxHeight.      
      var newText = document.createTextNode("Current zoom factor = " + currentZoomFactor.toFixed(3)); // Create a generic new text node object.
      var parentNode = document.getElementById('currentZoomFactorText');                  // Get the parent node of the text node we want to replace.
      
      parentNode.replaceChild(newText, parentNode.firstChild);  // Replace the first child text node with the new text object.
    }
        
    function zoomViaMouseWheel(mouseWheelEvent)
    {      
      if (mouseWheelEvent.wheelDelta > 0)
        zoom('zoomIn');
      else
        zoom('zoomOut');
        
      /* When the mouse is over the webpage, don't let the mouse wheel scroll the entire webpage: */
      mouseWheelEvent.cancelBubble = true;  
      return false;             
    }
    
    function zoomViaClick(click)
    {      
      if (click){
        zoom('zoomIn');
      }
      else{
        zoom('zoomOut');
      }
        
      /* When the mouse is over the webpage, don't let the mouse wheel scroll the entire webpage: */
      mouseWheelEvent.cancelBubble = true;  
      return false;             
    }




   void function initialize()
    {        
      /* Add event listeners: */
   //   window.addEventListener('keydown', processKeyPress, true);    // OK to let the keydown event bubble.
      window.addEventListener('mousewheel', zoomViaMouseWheel, false);  // Don't let the mousewheel event bubble up to stop native browser window scrolling.
      window.addEventListener('click', zoomViaClick, false);
      /* Set a global variable and detect if the browser supports SVG: */
      svgViewPort = document.getElementById('svg-view-port');      // Best to only access the SVG element after the page has fully loaded.
      
      if(svgViewPort.namespaceURI != "http://www.w3.org/2000/svg")  // Alert the user if their browser does not support SVG.
        alert("Inline SVG in HTML5 is not supported. This document requires a browser that supports HTML5 inline SVG.");
            
      /* For the svg element, specifically set the viewBox attribute's width and height values in that one of them will be used to calculate the current scaling factor. */
      svgViewPort.setAttribute('viewBox', "0 0 " + svgViewBoxWidth + " " + svgViewBoxHeight); 
    }();
