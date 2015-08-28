/**
 * @copyright Julien Etienne 2015
 */
/**
 * Gets the prefixed transition end value fast, without creating a dummy object
 * @param  {Object} dummyElement - Any DOM element, preferably the subject.
 * @return {String} -  Returns the first supported transitionEnd string.
 */
function prefixTransitionEnd(dummyElement) {
    var transitionEnd = ['transitionend', 'oTransitionEnd', 'transitionend', 'webkitTransitionEnd'],
        transitions = ['transition', 'OTransition', 'MozTransition', 'WebkitTransition'],
        i = 0;
    for (; i < transitions.length; i++) {
        if (dummyElement.style[transitions[i]] !== undefined) {
            return transitionEnd[i];
        }
    }
}
