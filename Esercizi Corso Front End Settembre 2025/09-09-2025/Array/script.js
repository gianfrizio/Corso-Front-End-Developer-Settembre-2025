// Esercizi di array
// Esercizio 1: crea array 'frutta', stampa secondo elemento, modifica e ristampa
display("Esercizio 1 - Il tuo frutto preferito");
let frutta = ["mela", "banana", "pera"];
display("Secondo frutto:", frutta[1]);
frutta[1] = "kiwi";
display("Array aggiornato:", frutta);

// Esercizio 2: crea array 'animali', aggiungi 'pesce' inizio e 'criceto' fine, rimuovi ultimo
display("Esercizio 2 - Aggiungi e togli");
let animali = ["cane", "gatto"];
animali.unshift("pesce");
animali.push("criceto");
animali.pop();
display(animali);

// Esercizio 3: crea array 'spesa', aggiungi 'pasta' e 'olio', rimuovi primo elemento, trova indice di 'olio'
display("Esercizio 3 - La lista della spesa");
let spesa = ["pane", "latte", "uova"];
spesa.push("pasta", "olio");
spesa.shift();
display("Indice di 'olio':", spesa.indexOf("olio"));

// Esercizio 4: crea array 'film', usa splice per rimuovere il secondo titolo e inserire due nuovi film
display("Esercizio 4 - Film preferiti");
let film = ["Inception", "Interstellar", "Matrix", "Avatar"];
film.splice(1, 1);
film.splice(1, 0, "Il Padrino", "Pulp Fiction");
display(film);

// Esercizio 5: crea array 'colori', stampa con numerazione for...of, modifica colore in terza posizione e usa slice
display("Esercizio 5 - Classifica colori");
let colori = ["rosso", "verde", "blu", "giallo"];
for (const [i, colore] of colori.entries()) {
  display(`${i + 1}. ${colore}`);
}
colori[2] = "nero";
let primiDueColori = colori.slice(0, 2);
display("Primi due colori:", primiDueColori);

// Esercizio 6: crea matrice 3x3, stampa centro, modifica ultimo valore e stampa la riga centrale
display("Esercizio 6 - Tabellina 3x3");
let tabella = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
tabella[2][2] = 99;
display("Centro:", tabella[1][1]);
display("Riga centrale:");
for (let num of tabella[1]) {
  display(num);
}

// Esercizio 7: crea array 'libri', aggiungi, rimuovi con splice, inserisci nuovi titoli, verifica presenza e stampa elenco
display("Esercizio 7 - Libreria personale");
let libri = ["Harry Potter", "Il Signore degli Anelli", "1984"];
libri.unshift("Il Piccolo Principe");
let idx1984 = libri.indexOf("1984");
if (idx1984 !== -1) libri.splice(idx1984, 1);
let idxHP = libri.indexOf("Harry Potter");
if (idxHP !== -1) libri.splice(idxHP + 1, 0, "Dune", "It");
let idxIt = libri.indexOf("It");
if (idxIt !== -1) {
  display(`Trovato a posizione ${idxIt}`);
} else {
  display("Non trovato");
}
display("Lista libri aggiornata:");
for (const libro of libri) {
  display(libro);
}
