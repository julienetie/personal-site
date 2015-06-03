// get all squares into array
// calculate width and height of parent square, sqroor of array length  
// make x and y attr getter function 
// function to get top neighbour
// function to get bottom neighbour
// function to get left neighbour
// function to get right neighbour
// 
// function to random select square
// 
// 
// //tiles[0].setAttributeNS(null, 'fill', 'red');

function getTiles(tileGroupId) {
  var tilesGroup = document.getElementById(tileGroupId);
  var tilesCollection = tilesGroup.getElementsByTagName('rect');
  return tilesCollection;
}
var tiles = getTiles('tiles');
var randomTile = randomBlankTile(tiles);


function tilesWidth(collection) {
  return Math.sqrt(collection.length);
}


function randomBlankTile(collection) {
  var positions = collection.length;
  var randomPosition = Math.ceil(positions * Math.random()) - 1;

  return randomPosition;

}



function applyBlankTile(collection, randomTile) {
  collection[randomTile].setAttributeNS(null, 'fill', 'red');
}


function getPositionY(collection, randomTile) {
  var xCoords = tilesWidth(collection);
  var rowVal;
  if (randomTile % xCoords === 0 && randomTile !== 0) {
    rowVal = Math.floor(randomTile / xCoords) ;
  } else {
    rowVal = Math.floor(randomTile / xCoords);
  }
  return rowVal;
}


function getPositionX(collection, randomTile) {
  var xCoords = tilesWidth(collection);
  var rowVal;
  if (randomTile % xCoords === 0 && randomTile !== 0) {
    rowVal = Math.floor(randomTile % xCoords) ;
  } else {
    rowVal = Math.floor(randomTile % xCoords);
  }
  return rowVal;
}



console.log(
  getPositionX(tiles, randomTile),
  getPositionY(tiles, randomTile)
);



//alert(tilesWidth(tiles));
//alert(randomBlankTile(tiles));
applyBlankTile(tiles, randomTile);
