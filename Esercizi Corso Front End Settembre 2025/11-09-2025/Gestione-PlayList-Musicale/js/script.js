// Dati iniziali
const playlist = [
  { title: "Song A", artist: "Artist 1", genre: "Rock", duration: 4 },
  { title: "Song B", artist: "Artist 2", genre: "Pop", duration: 3 },
  { title: "Song C", artist: "Artist 1", genre: "Jazz", duration: 5 },
  { title: "Song D", artist: "Artist 3", genre: "Rock", duration: 6 },
  { title: "Song E", artist: "Artist 4", genre: "Pop", duration: 4 }
];

// Funzione addSongs(...songs) usa rest operator
function addSongs(basePlaylist, ...songs) {
  // filtra solo gli oggetti validi che contengono almeno title e artist
  const valid = songs.filter(s => s && typeof s.title === 'string' && typeof s.artist === 'string');
  // restituisce una copia usando spread
  return [...basePlaylist, ...valid];
}

// filtro per genere
function filterByGenre(pl, genre) {
  return pl.filter(song => song.genre.toLowerCase() === genre.toLowerCase());
}

// totale durata in minuti
function totalDuration(pl) {
  return pl.map(s => s.duration).reduce((acc, v) => acc + v, 0);
}

// stampa con destructuring
function printPlaylist(pl, containerEl) {
  // rimuovi contenuto esistente
  while (containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  }

  pl.forEach(song => {
    const { title, artist, genre, duration } = song; // destructuring

    const li = document.createElement('li');

    const left = document.createElement('span');
    left.textContent = `🎵 ${title} by ${artist} `;

    const meta = document.createElement('span');
    meta.className = 'meta';
    meta.textContent = `[${genre}] - ${duration}min`;

    left.appendChild(meta);
    li.appendChild(left);
    containerEl.appendChild(li);
  });
}

// versione modificata (+1 minuto)
function increaseDuration(pl) {
  return pl.map(s => ({ ...s, duration: s.duration + 1 }));
}

// ---- DOM ----
const originalListEl = document.getElementById('original-list');
const modifiedListEl = document.getElementById('modified-list');
const totalDurationEl = document.getElementById('total-duration');
const rockSongsEl = document.getElementById('rock-songs');

function refreshUI(currentPlaylist) {
  printPlaylist(currentPlaylist, originalListEl);
  const modified = increaseDuration(currentPlaylist);
  printPlaylist(modified, modifiedListEl);
  totalDurationEl.textContent = `Totale durata playlist originale: ${totalDuration(currentPlaylist)} minuti`;
  const rocks = filterByGenre(currentPlaylist, 'Rock').map(s => s.title);
  rockSongsEl.textContent = `Canzoni Rock: [${rocks.join(', ')}]`;
}

// inizializza UI
refreshUI(playlist);

// gestore form add
const form = document.getElementById('addSongForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const artist = document.getElementById('artist').value.trim();
  const genre = document.getElementById('genre').value.trim();
  const duration = Number(document.getElementById('duration').value);

  const newSong = { title, artist, genre, duration };
  // usa addSongs con rest (qui uno solo, ma funziona con più)
  const updated = addSongs(playlist, newSong);

  // aggiorna playlist originale
  playlist.length = 0;
  updated.forEach(s => playlist.push(s));

  refreshUI(playlist);
  form.reset();
});

