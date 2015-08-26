/**
 * @Author Barney Carroll 
 * @see  {@Link https://gist.github.com/barneycarroll/1096784}
 */
function detectCSS(prop){
    var prop = prop.replace(/-(\w)/g,function(s,g){
            return g.toUpperCase();
        }), 
        pre  = ',Moz,Ms,O,Webkit'.split(',');

    for (var i = 0; i < pre.length; ++i){
        if(i==1)
            prop = prop.slice(0,1).toUpperCase() + prop.slice(1);

        if(pre[i] + prop in document.documentElement.style)
            return pre[i] + prop;
    }

    return false; 
}


var transitionName = detectCSS('transition');
var transformName = detectCSS('transform');
var animationDuration = detectCSS('animationDuration');
