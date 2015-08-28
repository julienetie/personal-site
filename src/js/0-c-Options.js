
(function(root) {
    var preferences = {

        linkScrollSpeed: 1350,
        fadeOutSpeed: 0.25,
        fadeInSpeed: 0.6,
        logoSize: 11,
        smoothScrollOptions: {

            // Scrolling Core
            frameRate: 150, // [Hz]
            animationTime: 400, // [ms]
            stepSize: 400, // [px]

            // Pulse (less tweakable)
            // ratio of "tail" to "acceleration"
            pulseAlgorithm: true,
            pulseScale: 4,
            pulseNormalize: 1,

            // Acceleration
            accelerationDelta: 20, // 20
            accelerationMax: 1, // 1

            // Keyboard Settings
            keyboardSupport: true, // option
            arrowScroll: 50, // [px]

            // Other
            touchpadSupport: true,
            fixedBackground: true,
            excluded: ''
        }
    };

    root.opt = preferences;
}(window));
