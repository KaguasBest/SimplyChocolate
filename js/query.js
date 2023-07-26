// Інінціалізація програвача
const player = new Plyr('#features-player');

// Check media query

function checkMediaQuery() {
  if (window.innerWidth < 767) {
    player.poster = './images/made/made-mobile.png';
  }

  if (window.innerWidth > 768) {
    player.poster = './images/made/made-tablet.png';
  }

  if (window.innerWidth > 1200) {
    player.poster = './images/made/made-desktop.png';
  }
}

// Initial check

checkMediaQuery();

// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);

// Check retina display

var query = '(min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)';

function checkMediaSize() {
  if (matchMedia(query).matches && window.innerWidth < 767) {
    player.poster = './images/made/made-mobile@2x.png';
  }

  if (matchMedia(query).matches && window.innerWidth > 768) {
    player.poster = './images/made/made-tablet@2x.png';
  }

  if (matchMedia(query).matches && window.innerWidth > 1200) {
    player.poster = './images/made/made-desktop@2x.png';
  }
}

checkMediaSize();

// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaSize);
