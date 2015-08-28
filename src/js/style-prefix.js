/**
 * @copyright Julien Etienne 2015
 */

/**
 * @author Julien Etienne
 * Sets the style of an element with the appropriate browser prefix.
 * @param  {Object} styleObject       - Style detials.
 * @param  {Object} styleObject.el    - The element to apply the style to.
 * @param  {String} styleObject.style - The style that may require a prefix.
 * @param  {String|Number} styleObject.value - The value to be applied.
 */
function stylePrefix(styleObject) {
    var element = styleObject.el,
        cssStyle = styleObject.style,
        value = styleObject.value;

    if (!element && !cssStyle && !value) {
        return;
    }

    var vendors = ['ms', 'o', 'moz', 'webkit'],
        cssStyleCap = cssStyle.charAt(0).toUpperCase() + cssStyle.substring(1);
    if (!element.style[cssStyle]) {
        vendors.filter(function(vendor) {
            if (element.style[vendor + cssStyleCap] !== undefined) {
                element.style[vendor + cssStyleCap] = value;
            }
        });
    } else {
        element.style[cssStyle] = value;
    }
}
