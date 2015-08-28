/*           _.-~-.
           7''  Q..\
        _7         (_
      _7  _/    _q.  /
    _7 . ___  /VVvv-'_                                            .
   7/ / /~- \_\\      '-._     .-'                      /       //
  ./ ( /-~-/  ||'=.__  '::. '-~'' {             ___   /  //     ./{
 V   V-~-~|   ||   __''_   ':::.   ''~-~.___.-'' _/  // / {_   /  {  /
  VV/-~-~-|  / \ .'__'. '.  '::  ____               _ _ _        ''.
  / /~~~~||  VVV/ /  \ )  \     |  _ \ ___  ___(_)___(_) | | __ _   .::'
 / (~-~-~\\.-' /    \'   \::::. | |_) / _ \/ __| |_  / | | |/ _` | :::'
/..\    /..\__/      '     '::: |  _ <  __/\__ \ |/ /| | | | (_| | ::'
vVVv    vVVv                 ': |_| \_\___||___/_/___|_|_|_|\__,_| ''v0.3
Copyright (c) 2015 Julien Etienne. MIT License */

(function(root) {

    var previousTime = 0, i;

    function dateNow() {
        return Date.now() || new Date().getTime();
    }

    var request = requestAnimationFrame,
        cancel = cancelAnimationFrame;

    var requestTimeout = function(fn, delay) {
        var start = dateNow();

        function increment(d) {
            this.k = !this.k ? d : null;
            return this.k += 1;
        }

        function loop() {
            this.delta = dateNow() - start;
            // **Lint**
            this.callHandler = this.delta >= delay ? fn.call() : request(loop);
        }

        request(loop);
        return increment(0);
    };


    root.resizilla = function(handler, delay, inception) {

        function debounce() {
            var timeout;

            return function() {
                var context = this,
                    args = arguments;

                var lastCall = function() {
                    timeout = 0;
                    if (!inception) {
                        handler.apply(context, args);
                    }
                };

                this.instant = inception && !timeout;
                cancel(timeout);
                timeout = requestTimeout(lastCall, delay);

                if (this.instant) {
                    handler.apply(context, args);
                }
            };
        }

        var handlerFunc = debounce(arguments),

            addEvent = function(handler) {
                if (this.addEventListener)
                    this.addEventListener('resize', handler, true);
                else
                    this.attachEvent('onresize', handler);
            };

        if (screen.width > 1023 || this.mobile) {
            addEvent.call(this, handlerFunc);
        }
    };

    resizilla.enableMobileResize = function() {
        root.mobile = true;
    };

}(window));
//.call(this));
