(function (root) {
/*
 * More fruity circle BS, enjoy ;-) 
*/
    // Options
    var opt = {
        count: 32,
        min: 0.15,
        max: 0.6,
        maxVel: 12, // Set this to 1
        opacity: 0.5, // For mobile
        filter: "difference" // multiply | exclusion
    };

    
    
    var canvas = document.getElementById('smarties'),
        c = canvas.getContext('2d'),
        space = [canvas.width, canvas.height],
        cProps = [0, 0].concat(space),
        rad = 2 * Math.PI,
        rand,
        collision = {};
  
/** Quick dirty trick to faill back on something less
 *  cpu intensivie for mobile devices
 */
if(screen.width < 1023){
   c.globalAlpha = opt.opacity;
}else{
  c.globalCompositeOperation = opt.filter;
}
    // Make circles
    var circles = [];
    for (var i = 0; i < opt.count; i++) {
        rand = Math.random();
        rand = rand > opt.min ? rand : opt.min;
        var rDiff = (opt.max * 300) * rand;
        circles.push({
            x: ~~ ((space[0] * rand) - rDiff) || 25,
            y: ~~ ((space[1] * rand) - rDiff) || 25,
            r: ~~ (rDiff),
            color: ~~ (360 * rand),
            vx: ~~ (opt.maxVel * Math.random()),
            vy: ~~ (opt.maxVel * rand)
        });
    }


// Switch
var sw,count = 0;
root.switchState.smarties = function(state){
    if(!count){
        sw = state;
     requestAnimationFrame(paint);
     count = 1;
    }else{
       sw = state;
       count = 0;
    }
};
    // Paint circles
    function paint() {
        c.fillRect.apply(c, cProps);
        c.clearRect.apply(c, cProps);
        for (var i = 0; i < circles.length; i++) {
            //var rand  = (circles[i].color /3.6) /2;
            c.fillStyle = 'hsl(' + circles[i].color + ','+100+'%,'+50+'%)';
            c.beginPath();
            c.arc(circles[i].x, circles[i].y, circles[i].r, 0, rad, false);
            c.fill();

            // Collision logic
            collision.right = circles[i].x + circles[i].r > space[0];
            collision.left = circles[i].x - circles[i].r < 0;
            collision.floor = circles[i].y + circles[i].r > space[1];
            collision.ceiling = circles[i].y - circles[i].r < 0;

            // Turn the other cheek 
            collision.left || collision.right ? circles[i].vx *= -1 : null;
            collision.floor || collision.ceiling ? circles[i].vy *= -1 : null;

            circles[i].x += circles[i].vx; // horizontal force 
            circles[i].y += circles[i].vy; // vertical force 
        }
        if(sw)
            requestAnimationFrame(paint);
    }

  


}(window));

