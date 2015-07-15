  var get = 'getElementById';
    var getClass = 'getElementsByClassName';
    var d = document;
    var smartiesCanvas = d[get]('smarties');
    var smartiesPlaceholder = d[get]('smarties-placeholder');
    var crosses = d[getClass]('cross');
    // Attach eventListener to page
    document.addEventListener('mouseover', playExperiment, false);
    document.addEventListener('mouseout', stopExperiment, false);

    function playExperiment(e) {
        if (e.target === smartiesCanvas) {
            e.target.style.opacity = 1;
            e.target.parentNode.style.backgroundImage = 'none';
            //alert('yea');
            switchState(true);
        }
    }

    function stopExperiment(e) {
        if (e.target === smartiesCanvas) {
            //alert('yea');
            switchState(false);
        }
    }



    /**
     * SVG viewBox correction
     */

    // get SVG collection
    // for each svg
    var parentsHeight;
    var parentsWidth;
    var line;
    var line1;
    var line2;
    window.onload = function() {
        for (var i = 0; i < crosses.length; i++) {
            parentsHeight = parseInt(window.getComputedStyle(crosses[i].parentNode, null).getPropertyValue("height"), 10) - 33;
            parentsWidth = parseInt(window.getComputedStyle(crosses[i].parentNode, null).getPropertyValue("width"), 10);
            //  parentsWidth = parseInt(crosses[i].parentNode.getBoundingClientRect().width, 10);
            //Get line 
            line = crosses[i].getElementsByTagName('line');
            line1 = line[0];
            line2 = line[1];
            line1.setAttribute('x2', parentsWidth);
            line1.setAttribute('y2', parentsHeight);
            line2.setAttribute('y1', parentsHeight);
            line2.setAttribute('x2', parentsWidth);
            // crosses[i].childNodes[i].setAttribute('y2', parentsHeight);

            crosses[i].setAttribute('height', parentsHeight);
            crosses[i].setAttribute('width', parentsWidth);
            crosses[i].setAttribute('viewBox', [0, 0, parentsWidth, parentsHeight].join(','));
            crosses[i].setAttribute('preserveAspectRatio', 'xMidYMin');
        }


        
    function placeCaretAtEnd(el) {
        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    placeCaretAtEnd(document.getElementById("editable"));
    }

    /**
     * Captcha
     */
    /*
    function captchaCanvas() {
        var captcha = document.getElementById("Captcha");
        var ctx = captcha.getContext("2d");
        captcha.width = 500;
        ctx.font = "18px Verdana";
        // Create gradient
        var gradient = ctx.createLinearGradient(0, 0, captcha.width, 0);
        gradient.addColorStop("0", "black");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillText('\"1 lov roobots\"', 10, 90);

    }
    captchaCanvas();
*/
