/**
 * Gets the DOM element, index is optional
 * @param  {String} type    Selector type
 * @param  {String} element Selector reference
 * @param  {Number} index   Collection index.
 * @return {Object}         node | HTMLCollection.
 */
function get(type, element, index) {
  var elementReference, htmlObject,
    hasIndex = typeof index == 'number';

  // Check type 
  switch (type) {
    case '#' || 'id':
      elementReference = 'getElementById';
      break;
    case '.' || 'className':
      elementReference = 'getElementsByClassName';
      break;
    case 'tag' || 'tagName':
      elementReference = 'getElementsByTagName';
      break;
    case 'name':
      elementReference = 'getElementsByName';
      break;
    default:
      return;
  }

  // Check element exist
  if (element === 'body') {
    htmlObject = document.getElementsByTagName('body')[0] ||
      document.body;
    return htmlObject;
  } else if (!element) {
    return;
  }

  // Return node or collection of nodes
  if (!hasIndex) {
    htmlObject = document[elementReference](element);
  } else if (hasIndex && (elementReference === '#' ||
      elementReference === 'id')) {
    return;
  } else {
    htmlObject = document[elementReference](element)[index];
  }
  return htmlObject;
}
