var canvas = document.getElementById('canvas');
var brushColor;

// Draw the canvas based on the height and width given.
// Height determines the number of rows.
// Width determines how many pixels to put in each row.

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
        // event.target.className += ' red';
        event.target.className += ' ' + brushColor;
      });
    }
  }
};

// Pick a color. Clicking on a color saves the class name.

var colorPicker = function () {
  var palette = document.getElementById('palette');
  var color = palette.getElementsByClassName('color');
  for (var i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function(event) {
      brushColor = event.target.className.slice(6);
    });
  }
};

drawCanvas(32, 24);
colorPicker();
