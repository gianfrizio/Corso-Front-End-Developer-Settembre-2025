// studenti di esempio
const studenti = [
  { nome: "Mario Rossi", voto: 8, presente: true },
  { nome: "Luigi Bianchi", voto: 5, presente: false },
  { nome: "Anna Verdi", voto: 9, presente: true },
  { nome: "Beatrice Neri", voto: 6, presente: true },
  { nome: "Carlo Blu", voto: 4, presente: true },
  { nome: "Davide Rosa", voto: 7, presente: false },
  { nome: "Elena Gialli", voto: 10, presente: true },
  { nome: "Federico Viola", voto: 3, presente: false },
  { nome: "Giorgia Azzurra", voto: 8, presente: true },
  { nome: "Lorenzo Marrone", voto: 2, presente: false },
  { nome: "Martina Rosa", voto: 6, presente: true },
  { nome: "Simone Nero", voto: 5, presente: true },
];

const btn = document.getElementById('run');
const out = document.getElementById('output');
const removeForm = document.getElementById('removeForm');
const removeNameInput = document.getElementById('removeName');

// Array che rappresenta lo stato corrente di "tutti" (spread + eventuali rimozioni)
let tuttiCorrente = [];

// funzione per mostrare output
function log(titolo, dato) {
  const h4 = document.createElement('h4');
  const pre = document.createElement('pre');
  h4.textContent = titolo;
  pre.textContent = typeof dato === 'string' ? dato : JSON.stringify(dato, null, 2);
  out.append(h4, pre);
}

// funzione helper per pulire l'output
function resetOutput() {
  out.innerHTML = '';
}

// 1) Operatore ternario, 2) Spread, 3) Rest, 4) map, 5) filter, 6) forEach, 7) destructuring
btn.addEventListener('click', () => {
  // ricreo 'tuttiCorrente' dallo stato iniziale usando spread
  const nuovo1 = { nome: 'Alessandro Verde', voto: 7, presente: true };
  const nuovo2 = { nome: 'Chiara Luminosa', voto: 9, presente: false };
  tuttiCorrente = [...studenti, nuovo1, nuovo2];
  runAnalysis();
});

// Funzione che esegue tutti gli step sull'array tuttiCorrente e aggiorna il DOM
function runAnalysis() {
  resetOutput();

  // 1. Operatore ternario: controllo sul primo studente (uso tuttiCorrente così le rimozioni sono visibili)
  const primo = tuttiCorrente[0];
  const esito = primo ? (primo.voto >= 6 ? 'Promosso' : 'Bocciato') : 'Nessun studente';
  log('1) Operatore ternario — primo studente', primo ? `${primo.nome}: ${esito}` : esito);

  // 2. Spread (già applicato) — mostro tuttiCorrente
  log('2) Spread — array tutti (stato corrente)', tuttiCorrente);

  // 3. Rest: raggruppaNomi(...nomi)
  function raggruppaNomi(...nomi) {
    return nomi;
  }
  const nomiRaggruppati = raggruppaNomi(...tuttiCorrente.slice(0, 3).map(s => s.nome));
  log('3) Rest — raggruppaNomi', nomiRaggruppati);

  // 4. map(): trasformo tutti in array di stringhe "Nome: (voto)"
  const formato = tuttiCorrente.map(el => `${el.nome}: ${el.voto}`);
  log('4) map() — formato "Nome: (voto)"', formato);

  // 5. filter(): solo presenti
  const presenti = tuttiCorrente.filter(el => el.presente);
  log('5) filter() — studenti presenti', presenti);

  // 6. forEach(): creo una lista <ul> con ✔️ o ❌ e applico classi promosso/bocciato
  const ul = document.createElement('ul');
  tuttiCorrente.forEach(s => {
    const li = document.createElement('li');
    li.textContent = `${s.nome} – ${s.presente && s.voto >= 6 ? '✔️' : '❌'}`;
    // classi css promosso/bocciato usando ternario
    li.classList.toggle('promosso', s.voto >= 6 && s.presente ? true : false);
    li.classList.toggle('bocciato', s.voto >= 6 && s.presente ? false : true);
    ul.appendChild(li);
  });
  out.appendChild(ul);

  // 7. Destructuring: presentaStudente and map
  function presentaStudente({ nome, voto, presente }) {
    return `Ciao, sono ${nome}, ho ${voto} e sono ${presente ? 'presente' : 'assente'}.`;
  }
  const presentazioni = tuttiCorrente.map(presentaStudente);
  log('7) Destructuring + map() — presentazioni', presentazioni);
}

// Form handler per rimuovere uno studente per nome usando filter()
if (removeForm) {
  removeForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const nomeDaRimuovere = removeNameInput.value.trim();
    if (!nomeDaRimuovere) return;
    // uso filter per rimuovere gli studenti con nome esatto (case-sensitive)
    const primaLung = tuttiCorrente.length;
    tuttiCorrente = tuttiCorrente.filter(s => s.nome !== nomeDaRimuovere);
    const dopoLung = tuttiCorrente.length;
    log('Rimozione', `Rimossi: ${primaLung - dopoLung}`);
    runAnalysis();
    removeForm.reset();
  });
}

