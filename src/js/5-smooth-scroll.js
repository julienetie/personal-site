/**
 * smooth-scroll fork
 * @desc This API is different to  the other smooth-scroll. This API is
 * responsible for the panning of the viewport when clicking on internal links.
 * @author Kieren Evans
 * @see  @link {https://github.com/kierenevans/smooth-scroll}
 * @license GNU
 * This API has been heavily customized by Julien Etienne, and is not
 * applicable for redistribution.
 */


/*jslint browser: true */
(function(window, document, options) {
    "use strict";

    var images = get('tag', 'img');

    function getOffsetTop(el) {
        if (!el) {
            return 0;
        }

        var yOffset = el.offsetTop,
            parent = el.offsetParent;

        yOffset += getOffsetTop(parent);

        return yOffset;
    }

    function getScrollTop(scrollable) {
        return scrollable.scrollTop || document.body.scrollTop || document.documentElement.scrollTop;
    }

    function scrollTo(scrollable, coords, millisecondsToTake, callback) {
        var currentY = getScrollTop(scrollable),
            diffY = coords.y - currentY,
            startTimestamp = null;

        if (coords.y === currentY || typeof scrollable.scrollTo !== 'function') {
            return;
        }

        function doScroll(currentTimestamp) {
            if (startTimestamp === null) {
                startTimestamp = currentTimestamp;
            }

            var progress = currentTimestamp - startTimestamp,
                fractionDone = (progress / millisecondsToTake),
                pointOnSineWave = Math.sin(fractionDone * Math.PI / 2);
            scrollable.scrollTo(0, currentY + (diffY * pointOnSineWave));

            if (progress < millisecondsToTake) {
                requestAnimationFrame(doScroll);
            } else {
                // Ensure we're at our destination
                scrollable.scrollTo(coords.x, coords.y);
                callback();
            }
        }

        requestAnimationFrame(doScroll);
    }


    function smoothScroll(e, scrollSpeedMs, callback) { // no smooth scroll class to ignore links
        if (e.target.className === 'no-ss') {
            return;
        }

        var source = e.target,
            targetHref = source.hash,
            target = null;

        if (!source || !targetHref) {
            return;
        }

        targetHref = targetHref.substring(1);
        target = document.getElementById(targetHref);
        if (!target) {
            return;
        }

        scrollTo(window, {
            x: 0,
            y: getOffsetTop(target)
        }, scrollSpeedMs, callback);
    }

    function visibility(callback, event, fadeVal, fadeSpeedVal) {
        function callbackToDelay() {
            callback(event);
        }
        for (var i = 0; i < images.length; i++) {
            fade.to(images[i], fadeSpeedVal, fadeVal, 'block');
            if (i === images.length - 1 && callback) {
                delay(callbackToDelay, fadeSpeedVal * 1000);
            }
        }
    }

    function scrollToLink(e) {
            smoothScroll(e, options.linkScrollSpeed, function() {
                visibility(false, e, 1, options.fadeInSpeed);
            });
    }

    // Uses target's hash for scroll
    document.addEventListener('click', function(e) {
        if (e.target.hash) {
            e.preventDefault();
        }
        visibility(scrollToLink, e, 0, options.fadeOutSpeed);
    }, false);

}(window, document, opt));
