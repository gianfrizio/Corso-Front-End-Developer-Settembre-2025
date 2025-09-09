// Calcolatrice - somma di due numeri
// Elementi DOM principali
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const btnCalcola = document.getElementById('btnCalcola');
const btnClear = document.getElementById('btnClear');
const risultato = document.getElementById('risultato');

/**
 * calcola
 * Legge i valori dagli input `n1` e `n2`, valida i dati e mostra la somma
 * nel paragrafo `#risultato`.
 * Dopo il calcolo i campi di input vengono azzerati (ma il risultato rimane visibile).
 * Casi gestiti:
 *  - campi vuoti -> messaggio di invito a inserire entrambi i numeri
 *  - valori non numerici o infiniti -> messaggio di errore
 *  - altrimenti mostra "Risultato: <somma>"
 */
function calcola() {
  // Nota: i numeri in JavaScript usano la rappresentazione a 64 bit.
  // Alcuni numeri decimali (es. 3.6 e 3.7) non si rappresentano esattamente
  // in binario, quindi `3.6 + 3.7` può diventare `7.300000000000001`.
  // Normalizzare l'input (virgola -> punto), facendo controlli precisi
  // e arrotondiamo il risultato per evitare artefatti.

  // Normalizza la virgola italiana e rimuove spazi
  const rawA = n1.value.trim().replace(',', '.');
  const rawB = n2.value.trim().replace(',', '.');

  // Validazione: campi vuoti
  if (rawA === '' || rawB === '') {
    risultato.textContent = 'Inserisci entrambi i numeri.';
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);

  // Validazione: non numerico
  if (Number.isNaN(a) || Number.isNaN(b)) {
    risultato.textContent = 'Valore non numerico (usa 12.34 come formato).';
    return;
  }

  // Validazione: numeri finiti (controllo overflow / Infinity)
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    risultato.textContent = 'Valore troppo grande o infinito.';
    return;
  }

  // Determina il numero di decimali di input per arrotondare il risultato
  function countDecimals(s) {
    const idx = s.indexOf('.');
    if (idx === -1) return 0;
    return s.length - idx - 1;
  }

  const decimals = Math.max(countDecimals(rawA), countDecimals(rawB));

  // Somma e arrotondamento: usa Number.EPSILON per stabilizzare il rounding
  const somma = a + b;
  function roundTo(n, d) {
    const factor = 10 ** d;
    return Math.round((n + Number.EPSILON) * factor) / factor;
  }

  const risultatoNumerico = roundTo(somma, decimals);

  // Mostra il risultato (se ci sono decimali, mantienili; altrimenti mostra intero)
  risultato.textContent = `Risultato: ${risultatoNumerico}`;

  // Dopo aver mostrato il risultato, azzera i campi di input con un ciclo for
  const inputsToClear = [n1, n2];
  for (let i = 0; i < inputsToClear.length; i++) {
    inputsToClear[i].value = '';
  }
  n1.focus();
}

/**
 * azzera
 * Pulisce i campi di input e il risultato, e riporta il focus al primo campo.
 */
function azzera() {
  n1.value = '';
  n2.value = '';
  risultato.textContent = '';
  n1.focus();
}

// Event listeners: click sui pulsanti
btnCalcola.addEventListener('click', calcola);
btnClear.addEventListener('click', azzera);

// Supporto Invio: premendo Enter in uno dei due campi si esegue il calcolo
const inputs = [n1, n2];
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keydown', function (e) {
    if (e.key === 'Enter') calcola();
  });
}

// Shortcut globale per accessibilità keyboard
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    calcola();
  }
});
