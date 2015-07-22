  function postPrintRendering() {
    var prompt = true;
    var beforePrint = function() {
      if (prompt === true) {

        alert('Because images load on view, you may need to close this print prompt and quickly scroll to each image to ensure a good print/ pdf.');
        window.scrollTo(0, 0);
      }
    };
    var afterPrint = function() {
      if (prompt === true) {
        prompt = false;
      }
    };

    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
          beforePrint();
        } else {
          afterPrint();
        }
      });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;

  }
