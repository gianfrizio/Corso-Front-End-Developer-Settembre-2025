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
  resetOutput();

  // 1. Operatore ternario: controllo sul primo studente
  const primo = studenti[0];
  const esito = primo.voto >= 6 ? 'Promosso' : 'Bocciato';
  log('1) Operatore ternario — primo studente', `${primo.nome}: ${esito}`);

  // 2. Spread: creo un nuovo array "tutti" che non modifica l'array originale
  const nuovo1 = { nome: 'Alessandro Verde', voto: 7, presente: true };
  const nuovo2 = { nome: 'Chiara Luminosa', voto: 9, presente: false };
  const tutti = [...studenti, nuovo1, nuovo2];
  log('2) Spread — array tutti (originale non modificato)', tutti);

  // 3. Rest: raggruppaNomi(...nomi)
  function raggruppaNomi(...nomi) {
    return nomi;
  }
  const nomiRaggruppati = raggruppaNomi('Mario Rossi', 'Anna Verdi', 'Elena Gialli');
  log('3) Rest — raggruppaNomi', nomiRaggruppati);

  // 4. map(): trasformo tutti in array di stringhe "Nome: (voto)"
  const formato = tutti.map(el => `${el.nome}: ${el.voto}`);
  log('4) map() — formato "Nome: (voto)"', formato);

  // 5. filter(): solo presenti
  const presenti = tutti.filter(el => el.presente);
  log('5) filter() — studenti presenti', presenti);

  // 6. forEach(): creo una lista <ul> con ✔️ o ❌
  const ul = document.createElement('ul');
  tutti.forEach(s => {
    const li = document.createElement('li');
    li.textContent = `${s.nome} – ${s.presente ? '✔️' : '❌'}`;
    ul.appendChild(li);
  });
  out.appendChild(ul);

  // 7. Destructuring: presentaStudente and map
  function presentaStudente({ nome, voto, presente }) {
    return `Ciao, sono ${nome}, ho ${voto} e sono ${presente ? 'presente' : 'assente'}.`;
  }
  const presentazioni = tutti.map(presentaStudente);
  log('7) Destructuring + map() — presentazioni', presentazioni);

});
