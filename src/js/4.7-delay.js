function delay(callback, duration) {
    var startTime = 0,
        terminate = false;

    function loop(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        if (timestamp > startTime + duration && !terminate) {
            if (callback) callback();
            terminate = true;
        } else {
            requestAnimationFrame(loop);
        }
    }

    requestAnimationFrame(loop);
}
