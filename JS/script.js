let music = document.getElementById("music");
let controls = document.getElementById("controls");
let progress = document.getElementById("progress");
music.onloadedmetadata = function () {
  progress.max = music.duration;
  progress.value = music.currentTime;
};

function playpause() {
  if (controls.classList.contains("fa-pause")) {
    music.pause();
    controls.classList.remove("fa-pause");
    controls.classList.add("fa-play");
  } else {
    music.play();
    controls.classList.add("fa-pause");
    controls.classList.remove("fa-play");
  }
}
if (music.play()) {
  setInterval(() => {
    progress.value = music.currentTime;
  }, 500);
}

progress.onchange = function () {
  music.play();
  music.currentTime = progress.value;
  controls.classList.add("fa-pause");
  controls.classList.remove("fa-play");
};
