// Add keyboard accessibility to Change Background button
var changeEnter = document.getElementById("changeSpan");
changeEnter.addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        changeEnter.click();
    }
});
////////////////////////////////////////////////////////////////////////////////

// Responsive breakpoint right above iPhone 6+ horizontal view for smaller images
// iPad and bigger will receive larger images
var big = window.matchMedia("(min-width: 741px)");
var small = window.matchMedia("(max-width: 740px)");

var bg = document.getElementById("bg");
var count = 0;
var lgImages = ["bg2.jpg", "bg3.jpg", "bg.jpg"];
var smImages = ["bg_mobile2.jpg", "bg_mobile3.jpg", "bg_mobile.jpg"];

function changeBackground() {
  // Remove anything from being selected
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {  // IE?
    document.selection.empty();
  }

  // Cycle through backgrounds depending on size
  if (big.matches) {
    bg.style.backgroundImage = "url(jpg/" + lgImages[count] + ")";
    count++;
    if (count===lgImages.length) count=0;
  }
  if (small.matches) {
    bg.style.backgroundImage = "url(jpg/" + smImages[count] + ")";
    count++;
    if (count===smImages.length) count=0;
  }
}
////////////////////////////////////////////////////////////////////////////////

// Preload alternate background images depending on browser size
function preloader() {
  if (big.matches) {
    if (document.images) {
  		var img1 = new Image();
      var img2 = new Image();
      img1.src = "jpg/bg2.jpg";
      img2.src = "jpg/bg3.jpg";
    }
  }
  if (small.matches) {
    if (document.images) {
  		var img1 = new Image();
      var img2 = new Image();
      img1.src = "jpg/bg_mobile2.jpg";
      img2.src = "jpg/bg_mobile3.jpg";
    }
  }
}

// Only loads after the main page has loaded
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

addLoadEvent(preloader);
