# Esercizi 08-09-2025

## Struttura
- `index.html` — pagina HTML che contiene tutti gli esercizi
- `script.js` — script JavaScript con le soluzioni complete
- `README.md` — questo file

## Come funziona
- Apri `index.html` in un browser
- I risultati appaiono automaticamente nella pagina e nella Console
- Clicca sui pulsanti per testare le parti interattive (`prompt`/`alert`)

## Contenuto esercizi
- **Variabili e tipi**: `let`, `const`, `typeof`
- **Operatori**: aritmetici, confronto, assegnazione
- **Condizioni**: `if/else`, `if/else if/else`
- **Cicli**: `for`, `while`
- **Funzioni**: dichiarazione, parametri, return
- **Array**: creazione, `push()`, `pop()`, cicli
- **Oggetti**: proprietà, metodi
- **Interazione**: `prompt()`, `alert()` (tramite pulsanti)

## Funzioni helper utilizzate
```javascript
// Aggiunge output alla pagina con innerHTML
addToPage(title, content)

// Crea pulsanti interattivi
addButton(title, buttonText, callback)
```

## Visualizzazione
- **Pagina web**: risultati visibili direttamente nell'HTML
- **Console browser**: stesso output con `console.log()` (F12 → Console)

## Note tecniche
- Usa `innerHTML` e template strings per semplicità
- JavaScript puro per la logica, DOM APIs solo per la visualizzazione
- Event listeners aggiunti dinamicamente per i pulsanti
