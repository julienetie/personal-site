var logo = get('#', 'logo');
var t = equilateral(65, [50, 50], logo);
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
    var tri = get('#', 'logo-holder');


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

        var source = e,
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
            //fade.to(images[i], fadeSpeedVal, fadeVal);
            images[i].style[transitionName] = 'opacity ' + fadeSpeedVal + 's linear';
            images[i].style.opacity = fadeVal;
            if (i === images.length - 1 && callback) {
                delay(callbackToDelay, fadeSpeedVal * 1000);
            }
        }
    }

    function scrollToLink(e) {
        smoothScroll(e, options.linkScrollSpeed, function() {
            visibility(function() {
                tri.style[animationDuration] = '4s';

                t.setAttribute('fill', 'black');
            }, e, 1, options.fadeInSpeed);
        });
    }

    function randomColor() {
        var colors = ['#FA3442', '#4EEB00', '#1A5DED'];
        var rand = Math.floor(Math.random() * colors.length);
        return colors[rand];
    }


    // Uses target's hash for scroll
    clicktap(document, function(e) {
        var speed, eventTarget, isOpera = false,
            target;
        // alert(e.target.id);

        if (window.opera && opera.version() < 15) {
            target = 'logo-holder';

        } else {
            target = 'equilateral';
        }

        e.stopPropagation();
        if (e.target.hash || e.target.id === target) {
            e.preventDefault();



            if (e.target.hash === '#top' || e.target.id === target) {
                tri.style[animationDuration] = '0.4s';
                t.setAttribute('fill', randomColor());
                speed = options.fadeOutSpeed;
            } else {
                tri.style[animationDuration] = '4s';
                t.setAttribute('fill', 'black');
                speed = 0;
            }

            if (e.target.id === target) {
                if (window.opera && opera.version() < 15) {
                    eventTarget = e.target.parentNode;
                } else {
                    eventTarget = e.target.parentNode.parentNode.parentNode;
                }


            } else {
                eventTarget = e.target;
            }

            visibility(scrollToLink, eventTarget, 0, speed);
        }
    }, false);

}(window, document, opt));
