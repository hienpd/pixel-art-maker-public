var canvas = document.getElementById('canvas');
var brushColor;

/* Draw the canvas based on the height and width given. Height determines the number of rows. Width determines how many pixels to put in each row. */

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
        if (event.target.className.length > 5) {
          event.target.className = 'pixel ' + brushColor;
        } else {
          event.target.className += ' ' + brushColor;
        }
      });
    }
  }
};

/* Allow user to pick a color. Clicking on a color saves the class name. Add event listeners to all the color panels. Add brush color class to indicator. */

var colorPicker = function () {
  var palette = document.getElementById('palette');
  var color = palette.getElementsByClassName('color');
  var currentColor = document.getElementsByClassName('current')[0];
  for (var i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function(event) {
    brushColor = event.target.className.slice(13);
    if (brushColor === 'erase') {
      currentColor.className = 'color current gridbg ' + brushColor;
    } else {
      currentColor.className = 'color current shadow ' + brushColor;
      }
    });
  }
};

drawCanvas(55, 30);
colorPicker();
