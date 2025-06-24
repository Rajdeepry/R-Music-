const songs = [
  {
    title: "Farebi",
    artist: "Raftaar",
    file: "Chaar Diwaari X @raftaarmusic  - FAREBI (Official Video) _ Pyaar Diwaari Arc 3.mp3",
    cover: "cover.jpg"
  },
   {
    title: "Sajde",
    artist: "Faheem Abdullah,Huazaif Nazar",
    file: "Sajde.mp3",
    cover: "sajde.jpg"
  },
  {
    title: "Sayiaara",
    artist: "Tanishk Bagchi, Faheem Abdullah, Arslan Nizami",
    file: "Sayiaara.mp3",
    cover: "Saiyaara.jpg"
  }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const cover = document.getElementById("cover");

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.file;
  cover.src = song.cover;
  playBtn.textContent = "▶️";
  progress.value = 0;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function updateProgress() {
  progress.value = (audio.currentTime / audio.duration) * 100;
}

function setProgress(e) {
  const percent = e.target.value;
  audio.currentTime = (percent / 100) * audio.duration;
}

playBtn.addEventListener("click", togglePlayPause);

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(songs[currentSong]);
  audio.play();
  playBtn.textContent = "⏸️";
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  audio.play();
  playBtn.textContent = "⏸️";
});

audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", setProgress);
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// Load initial song
loadSong(songs[currentSong]);
