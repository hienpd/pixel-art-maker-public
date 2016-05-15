var brushColor;
var customColor = '';
var toggle = true;
var canvas = document.getElementById('canvas');
var currentColor = document.getElementsByClassName('current')[0];

/* Draw the canvas based on the height and width given. Height determines the number of rows. Width determines how many pixels to put in each row. Add event listeners to each pixel. Toggle between colorPicker palette (true) and customPicker (false). */

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

        switch (toggle) {
          case false:
            event.target.className = 'pixel';
            event.target.style.backgroundColor = customColor;
            event.target.style.borderColor = customColor;
            break;
          case true:
            if (event.target.className.length > 5) {
              event.target.className = 'pixel ' + brushColor;
            } else {
              event.target.removeAttribute('style');
              event.target.className += ' ' + brushColor;
            }
        }
      });
    }
  }
};

/* Allow user to pick a color. Clicking on a color saves the class name. Add event listeners to all the color panels. Show brush color on indicator. */

var colorPicker = function () {
  var palette = document.getElementById('palette');
  var color = palette.getElementsByClassName('color');
  for (var i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function(event) {
    brushColor = event.target.className.slice(13);
    currentColor.removeAttribute('style');
    toggle = true;
    if (brushColor === 'erase') {
      currentColor.className = 'color current gridbg ' + brushColor;
    } else {
      currentColor.className = 'color current shadow ' + brushColor;
      }
    });
  }
};

var customPicker = function (event) {
  customColor = event.target.value;

  currentColor.className = 'color current shadow';
  currentColor.style.backgroundColor = customColor;
  toggle = false;
};

drawCanvas(55, 30);
colorPicker();
customPicker();
