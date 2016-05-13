// Get the main element to start putting stuff into it
var canvas = document.getElementById('canvas');

var drawCanvas = function (width, height) {
  for (var row = 0; row < height; row++) { // Draw height number of rows
    var pixelRow = document.createElement('div');
    pixelRow.className = 'pixelRow';
    canvas.appendChild(pixelRow);
    for (var i = 0; i < width; i++) { // Draw out row this wide (width)
      var pixel = document.createElement('div');
      pixelRow.appendChild(pixel);
    }
  }


};

drawCanvas(2, 2);
