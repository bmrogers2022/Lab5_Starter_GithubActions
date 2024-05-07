// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  var idk;
  const selectHorn = document.getElementById('horn-select');

  // Why don't we add all the selectHorn event listeners together?
  selectHorn.addEventListener('change', (event) => {
    const image = document.querySelector("img");
    image.src = `assets/images/${event.target.value}.svg`;

  });

  selectHorn.addEventListener('change', (event) => {
    idk = event.target.value;
  });

  selectHorn.addEventListener('change', (event) => {
    const audio = document.querySelector("audio");
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });

  const audio = document.querySelector("audio");
  const volumeControls = document.getElementById('volume-controls');

  volumeControls.addEventListener('change', (event) => {
    const icon = document.querySelector("img[alt='Volume level 2']");
    const volume = document.getElementById("volume");
    const bar_value = event.target.value;
    const target_volume = bar_value / 100;
    audio.volume = target_volume;
    
    if (event.target.value == 0) {
      icon.src = "assets/icons/volume-level-0.svg";
    } else if (event.target.value < 33) {
      icon.src = "assets/icons/volume-level-1.svg";
    } else if (event.target.value < 67) {
      icon.src = "assets/icons/volume-level-2.svg";
    } else {
      icon.src = "assets/icons/volume-level-3.svg";
    }
    event.target.value = bar_value;
  });

  document.querySelector("button").onclick = function() {
    if (idk == "party-horn") {
      jsConfetti.addConfetti();
    }
    audio.play();
  };
}
