var canvas = document.getElementById('canvas');
var brushColor;

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

// Pick a color. Click on a color and save the class name

var colorPicker = function () {
  var palette = document.getElementById('palette');
  var color = palette.getElementsByClassName('color');
  for (var i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function(event) {
      brushColor = event.target.className;
    });
  }
};

drawCanvas(32, 24);
colorPicker();
