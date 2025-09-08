// script.js - file condiviso per tutti gli esercizi del 08-09-2025

// Helper per aggiungere output alla pagina
function addToPage(title, content) {
  const area = document.getElementById('exercise-area');
  area.innerHTML += `
    <div style="margin-bottom: 20px; border: 1px solid #ccc; padding: 10px;">
      <h3>${title}</h3>
      <pre style="background: #f5f5f5; padding: 10px;">${content}</pre>
    </div>
  `;
}

// Helper per creare pulsanti
function addButton(title, buttonText, callback) {
  const area = document.getElementById('exercise-area');
  const buttonId = 'btn_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  
  area.innerHTML += `
    <div style="margin-bottom: 20px; border: 1px solid #ccc; padding: 10px;">
      <h3>${title}</h3>
      <button id="${buttonId}" style="padding: 10px 20px; font-size: 16px;">
        ${buttonText}
      </button>
    </div>
  `;
  
  // Aggiungi l'event listener dopo aver creato l'HTML
  document.getElementById(buttonId).addEventListener('click', callback);
}

// ESERCIZI DI BASE SU VARIABILI E TIPI
// 1. Crea una variabile let citta = "Palermo"; e stampala in console.
let citta = "Palermo";
console.log(citta);
addToPage("1. Variabile città", citta);

// 2. Crea una costante const pi = 3.14; e prova a riassegnarla. Che errore ottieni?
const pi = 3.14;
console.log("const pi = " + pi);
addToPage("2. Costante pi", "const pi = " + pi + "\n// pi = 3.1415; darebbe errore: TypeError: Assignment to constant variable.");
// pi = 3.1415; // Questo darebbe errore: TypeError: Assignment to constant variable.

// 3. Crea una variabile let temperatura = 25; e stampa in console "La temperatura è 25 gradi".
let temperatura = 25;
console.log("La temperatura è " + temperatura + " gradi");
addToPage("3. Temperatura", "La temperatura è " + temperatura + " gradi");

// 4. Dichiarane una let vuota; e stampane il valore. Che ottieni?
let vuota;
console.log(vuota); // undefined
addToPage("4. Variabile vuota", "let vuota; → " + vuota);

// 5. Stampa il tipo di queste variabili
let numero = 42;
let parola = "ciao";
let flag = false;
let nulla = null;
let nonDefinito;

console.log(typeof numero);    // number
console.log(typeof parola);    // string
console.log(typeof flag);      // boolean
console.log(typeof nulla);     // object (particolarità di JavaScript)
console.log(typeof nonDefinito); // undefined

addToPage("5. Tipi di variabili", 
  "typeof numero: " + typeof numero + "\n" +
  "typeof parola: " + typeof parola + "\n" +
  "typeof flag: " + typeof flag + "\n" +
  "typeof nulla: " + typeof nulla + " (particolarità JS)\n" +
  "typeof nonDefinito: " + typeof nonDefinito
);

// OPERATORI
// 1. Calcola 7 + 5, 10 - 3, 4 * 6, 20 / 4 e stampali.
console.log(7 + 5);
console.log(10 - 3);
console.log(4 * 6);
console.log(20 / 4);
addToPage("6. Operatori aritmetici", 
  "7 + 5 = " + (7 + 5) + "\n" +
  "10 - 3 = " + (10 - 3) + "\n" +
  "4 * 6 = " + (4 * 6) + "\n" +
  "20 / 4 = " + (20 / 4)
);

// 2. Calcola il resto di 17 % 3.
console.log(17 % 3);
addToPage("7. Operatore resto", "17 % 3 = " + (17 % 3));

// 3. Usa l'operatore += per sommare 10 a una variabile let punti = 50;
let punti = 50;
punti += 10;
console.log(punti);
addToPage("8. Operatore +=", "punti = 50; punti += 10 → " + punti);

// 4. Confronta e prendi visione:
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != 7);     // true
console.log(8 !== "8");  // true
addToPage("9. Operatori di confronto",
  "5 == '5' → " + (5 == "5") + "\n" +
  "5 === '5' → " + (5 === "5") + "\n" +
  "5 != 7 → " + (5 != 7) + "\n" +
  "8 !== '8' → " + (8 !== "8")
);

// CONDIZIONI
// 1. Crea una variabile let eta = 20; e stampa "Maggiorenne" se >= 18, altrimenti "Minorenne".
let eta = 20;
let risultatoEta;
if (eta >= 18) {
  console.log("Maggiorenne");
  risultatoEta = "Maggiorenne";
} else {
  console.log("Minorenne");
  risultatoEta = "Minorenne";
}
addToPage("10. Condizione età", "eta = " + eta + " → " + risultatoEta);

// 2. Crea una variabile let voto = 30; e stampa "Ottimo" se è 30, "Buono" se è >= 18, "Insufficiente" altrimenti.
let voto = 30;
let risultatoVoto;
if (voto === 30) {
  console.log("Ottimo");
  risultatoVoto = "Ottimo";
} else if (voto >= 18) {
  console.log("Buono");
  risultatoVoto = "Buono";
} else {
  console.log("Insufficiente");
  risultatoVoto = "Insufficiente";
}
addToPage("11. Condizione voto", "voto = " + voto + " → " + risultatoVoto);

// 3. Usa un if...else if...else per salutare in base a let ora = 9, 15, 21.
let ora = 9;
let saluto;
if (ora < 12) {
  console.log("Buongiorno");
  saluto = "Buongiorno";
} else if (ora < 18) {
  console.log("Buon pomeriggio");
  saluto = "Buon pomeriggio";
} else {
  console.log("Buonasera");
  saluto = "Buonasera";
}
addToPage("12. Saluto per ora", "ora = " + ora + " → " + saluto);

// CICLI
// 1. Stampa i numeri da 1 a 20 con un ciclo for.
let numeri1a20 = "";
for (let i = 1; i <= 20; i++) {
  console.log(i);
  numeri1a20 += i + (i < 20 ? ", " : "");
}
addToPage("13. Numeri da 1 a 20", numeri1a20);

// 2. Stampa i numeri pari da 2 a 20.
let numeriPari = "";
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
  numeriPari += i + (i < 20 ? ", " : "");
}
addToPage("14. Numeri pari da 2 a 20", numeriPari);

// 3. Con un ciclo while stampa i numeri da 10 a 1 (conto alla rovescia).
let countdown = "";
let contatore = 10;
while (contatore >= 1) {
  console.log(contatore);
  countdown += contatore + (contatore > 1 ? ", " : "");
  contatore--;
}
addToPage("15. Countdown 10 a 1", countdown);

// 4. Con un ciclo for stampa la tabellina del 5 (da 5x1 a 5x10).
let tabellina5 = "";
for (let i = 1; i <= 10; i++) {
  console.log("5x" + i + " = " + (5 * i));
  tabellina5 += "5x" + i + " = " + (5 * i) + "\n";
}
addToPage("16. Tabellina del 5", tabellina5);

// 5. Somma i numeri da 1 a 100 con un ciclo for.
let sommaTotale = 0;
for (let i = 1; i <= 100; i++) {
  sommaTotale += i;
}
console.log("Somma da 1 a 100: " + sommaTotale);
addToPage("17. Somma da 1 a 100", "Risultato: " + sommaTotale);

// FUNZIONI
// 1. Scrivi una funzione saluta() che stampa "Ciao!".
function saluta() {
  console.log("Ciao!");
}
saluta();
addToPage("18. Funzione saluta()", "saluta() → Ciao!");

// 2. Scrivi una funzione somma(a, b) che restituisce la somma.
function somma(a, b) {
  return a + b;
}
console.log(somma(3, 4));
addToPage("19. Funzione somma()", "somma(3, 4) → " + somma(3, 4));

// 3. Scrivi una funzione moltiplica(a, b) che restituisce il prodotto.
function moltiplica(a, b) {
  return a * b;
}
console.log(moltiplica(3, 4));
addToPage("20. Funzione moltiplica()", "moltiplica(3, 4) → " + moltiplica(3, 4));

// 4. Scrivi una funzione isPari(numero) che restituisce true se il numero è pari.
function isPari(numero) {
  return numero % 2 === 0;
}
console.log(isPari(4));
addToPage("21. Funzione isPari()", "isPari(4) → " + isPari(4));

// 5. Crea una funzione quadrato(numero) che restituisce il quadrato del numero.
function quadrato(numero) {
  return numero * numero;
}
console.log(quadrato(5));
addToPage("22. Funzione quadrato()", "quadrato(5) → " + quadrato(5));

// 6. Scrivi una funzione presentati(nome, eta) che stampa: "Ciao, mi chiamo Mario e ho 25 anni".
function presentati(nome, eta) {
  console.log("Ciao, mi chiamo " + nome + " e ho " + eta + " anni");
}
presentati("Mario", 25);
addToPage("23. Funzione presentati()", "presentati('Mario', 25) → Ciao, mi chiamo Mario e ho 25 anni");

// ARRAY
// 1. Crea un array frutti = ["mela", "banana", "pera"] e stampane il primo elemento.
let frutti = ["mela", "banana", "pera"];
console.log(frutti[0]);
addToPage("24. Array frutti - primo elemento", "frutti[0] → " + frutti[0]);

// 2. Aggiungi "kiwi" alla fine dell'array e stampalo.
frutti.push("kiwi");
console.log(frutti);
addToPage("25. Array frutti - dopo push", "frutti.push('kiwi') → [" + frutti.join(", ") + "]");

// 3. Rimuovi l'ultimo elemento con .pop() e stampalo.
let rimosso = frutti.pop();
console.log(rimosso);
addToPage("26. Array frutti - pop", "frutti.pop() → " + rimosso);

// 4. Stampa tutti gli elementi con un ciclo for.
let tuttiFrutti = "";
for (let i = 0; i < frutti.length; i++) {
  console.log(frutti[i]);
  tuttiFrutti += frutti[i] + (i < frutti.length - 1 ? ", " : "");
}
addToPage("27. Array frutti - ciclo for", tuttiFrutti);

// 5. Stampa la lunghezza dell'array.
console.log(frutti.length);
addToPage("28. Array frutti - lunghezza", "frutti.length → " + frutti.length);

// OGGETTI
// 1. Crea un oggetto auto con proprietà marca, modello, anno.
let auto = {
  marca: "Fiat",
  modello: "Panda",
  anno: 2005
};

// 2. Stampa in console solo marca e anno.
console.log(auto.marca);
console.log(auto.anno);
addToPage("29. Oggetto auto", "marca: " + auto.marca + "\nanno: " + auto.anno);

// 3. Aggiungi un metodo descrivi() che stampa "Questa auto è una Fiat Panda del 2005".
auto.descrivi = function() {
  console.log("Questa auto è una " + this.marca + " " + this.modello + " del " + this.anno);
};
auto.descrivi();
addToPage("30. Oggetto auto - metodo descrivi", auto.descrivi.toString().replace(/function.*{/, "").replace(/}$/, "").trim());

// MINI-PROGETTINI FLASH
// 2. Crea un array di tre nomi e fai un ciclo che li saluta tutti.
let nomi = ["Anna", "Luca", "Marco"];
let salutiNomi = "";
for (let i = 0; i < nomi.length; i++) {
  console.log("Ciao " + nomi[i] + "!");
  salutiNomi += "Ciao " + nomi[i] + "!\n";
}
addToPage("31. Saluti con array", salutiNomi);

// 3. Crea un oggetto studente e stampa in alert: "Mario ha preso 28".
let studente = {
  nome: "Mario",
  voto: 28
};
console.log(studente.nome + " ha preso " + studente.voto);
addToPage("32. Oggetto studente", studente.nome + " ha preso " + studente.voto);

// 4. Scrivi una funzione che, data una parola, restituisce la parola in maiuscolo.
function maiuscolo(parola) {
  return parola.toUpperCase();
}
console.log(maiuscolo("ciao"));
addToPage("33. Funzione maiuscolo", "maiuscolo('ciao') → " + maiuscolo("ciao"));

// 5. Stampa tutti i quadrati dei numeri da 1 a 10.
let quadrati = "";
for (let i = 1; i <= 10; i++) {
  console.log(i + " al quadrato = " + (i * i));
  quadrati += i + "² = " + (i * i) + "\n";
}
addToPage("34. Quadrati da 1 a 10", quadrati);

// INTERAZIONE CON L'UTENTE (con pulsanti)
// 1. Chiedi con prompt() il nome dell'utente e salutalo con alert().
addButton("35. Saluto con prompt", "Clicca per inserire il nome", function() {
  let nomeUtente = prompt("Come ti chiami?");
  if (nomeUtente) {
    alert("Ciao " + nomeUtente + "!");
  }
});

// 2. Chiedi all'utente un numero e mostra in alert() il suo quadrato.
addButton("36. Quadrato con prompt", "Clicca per inserire un numero", function() {
  let numeroUtente = prompt("Inserisci un numero");
  if (numeroUtente) {
    alert("Il quadrato di " + numeroUtente + " è " + (numeroUtente * numeroUtente));
  }
});

// 1. Fai inserire due numeri all'utente con prompt() e mostra la loro somma con alert().
addButton("37. Somma con prompt", "Clicca per sommare due numeri", function() {
  let num1 = prompt("Primo numero");
  if (num1 === null) return;
  let num2 = prompt("Secondo numero");
  if (num2 === null) return;
  alert("La somma è " + (Number(num1) + Number(num2)));
});