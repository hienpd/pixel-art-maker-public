var brushColor = 'erase';
var customColor = '';
var toggle = true;
var canvas = document.getElementById('canvas');
var currentColor = document.getElementsByClassName('current')[0];
currentColor.className = 'color current gridbg ' + brushColor;
var shouldDraw = null;


/* Draw the canvas based on the height and width given. Height determines the number of rows. Width determines how many pixels to put in each row. Add event listeners to each pixel. Toggle between colorPicker palette (true) and customPicker (false). Add events for painting on mousedown and enter, using shouldDraw as a toggle. */

var drawCanvas = function (width, height) {
  for (var row = 0; row < height; row++) {
    var pixelRow = document.createElement('div');
    pixelRow.className = 'pixelRow';
    canvas.appendChild(pixelRow);

    for (var i = 0; i < width; i++) {
      var pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelRow.appendChild(pixel);

      canvas.addEventListener('mousedown', function(event) {
        switch (toggle) {
          case true:
            event.target.removeAttribute('style');
            event.target.className = 'pixel ' + brushColor;
          break;
          case false:
            event.target.className = 'pixel';
            event.target.style.backgroundColor = customColor;
            event.target.style.borderColor = customColor;
          break;
        }
      });

      pixel.addEventListener('mousedown', function(event) {
        shouldDraw = true;
      });

      pixel.addEventListener('mouseup', function(event) {
        shouldDraw = false;
      });

      pixel.addEventListener('mouseenter', function(event) {
        if (shouldDraw === true) {
          switch (toggle) {
            case true:
              event.target.removeAttribute('style');
              event.target.className = 'pixel ' + brushColor;
            break;
            case false:
              event.target.className = 'pixel';
              event.target.style.backgroundColor = customColor;
              event.target.style.borderColor = customColor;
            break;
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
      toggle = true;
      currentColor.removeAttribute('style');
      if (brushColor === 'erase') {
        currentColor.className = 'color current gridbg ' + brushColor;
      } else {
        currentColor.className = 'color current shadow ' + brushColor;
      }
    });
  }
};

var customPicker = function (event) {
  toggle = false;
  customColor = event.target.value;
  currentColor.className = 'color current shadow';
  currentColor.style.backgroundColor = customColor;
};

drawCanvas(55, 30);
colorPicker();
customPicker();
