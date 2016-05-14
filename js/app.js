// Get the main element to start putting stuff into it
var canvas = document.getElementById('canvas');

var drawCanvas = function (width, height) {
  for (var row = 0; row < height; row++) {

    var pixelRow = document.createElement('div');

    pixelRow.className = 'pixelRow';
    canvas.appendChild(pixelRow);

    for (var i = 0; i < width; i++) {

      var pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRow.appendChild(pixel);
      pixel.addEventListener('click', function(event) {
        event.target.className += ' red';
      });

    }
  }


};

drawCanvas(32, 24);
