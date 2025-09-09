// script.js: gestione dinamica della lista della spesa
// Contiene funzioni per creare la pagina, aggiungere, rimuovere e renderizzare gli elementi

let items = []; // array di oggetti {id, nome, quantita}

// Funzione per generare un id randomico per ogni elemento aggiunto
function generateId() {
    // Genera un numero intero casuale da 1 a 1 miliardo
    return '_' + Math.floor(Math.random() * 1000000000 + 1);
}

// Funzione chiamata quando si aggiunge un elemento
function addItem() {
    const nameInput = document.getElementById('input');
    const qtyInput = document.getElementById('quantityInput');
    // Legge la select usata per scegliere la categoria durante l'aggiunta
    const catSelect = document.getElementById('addCategorySelect');
    // Estrae e pulisce il testo e la quantità da input
    const text = nameInput.value.trim();
    const quantity = parseInt(qtyInput.value, 10) || 1;
    const category = catSelect ? catSelect.value : 'Altro';

    // Se non viene inserito un nome, esce senza fare nulla
    if (text === '') return;

    // Aggiunge un nuovo oggetto all'array items con id, nome e quantità
    items.push({ id: generateId(), name: text, quantity: quantity, category: category, purchased: false });
    // Resetta i campi input per il prossimo inserimento
    nameInput.value = '';
    qtyInput.value = 1;
    // Aggiorna la lista nel DOM
    renderList();
}

// Funzione per rimuovere un elemento dall'array e aggiornare la vista
function removeItem(id) {
    // Filtra items escludendo l'id passato
    items = items.filter(item => item.id !== id);
    renderList();
}

// Funzione per renderizzare la lista degli elementi nel DOM
function renderList() {
    // Pulisce la console e mostra la struttura dati corrente
    console.clear();
    console.table(items);

    const list = document.getElementById('list');
    // Svuota il contenuto della lista per ristampa completa
    list.innerHTML = '';

    // Raggruppa gli elementi per categoria
    const grouped = items.reduce((acc, it) => {
        acc[it.category] = acc[it.category] || [];
        acc[it.category].push(it);
        return acc;
    }, {});

    // Per ogni categoria, crea una sezione con titolo e voci
    Object.keys(grouped).forEach(cat => {
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = cat;
        list.appendChild(sectionTitle);

        grouped[cat].forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-item';
            // Imposta data-category per permettere evidenziazione
            li.dataset.category = item.category;
            li.dataset.id = item.id;
            // Se l'item è stato acquistato aggiunge la classe
            const purchasedClass = item.purchased ? 'purchased' : '';
            // Costruisce in modo sicuro gli elementi
            const left = document.createElement('div');
            left.className = 'item-left';
            if (item.purchased) left.classList.add('purchased');

            const nameSpan = document.createElement('span');
            nameSpan.className = 'item-name';
            nameSpan.textContent = item.name;

            const qtySpan = document.createElement('span');
            qtySpan.className = 'item-quantity';
            qtySpan.textContent = `x ${item.quantity}`;

            left.appendChild(nameSpan);
            left.appendChild(qtySpan);

            const actions = document.createElement('div');
            actions.className = 'item-actions';

            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'toggle-btn';
            toggleBtn.dataset.toggleId = item.id;
            toggleBtn.setAttribute('aria-pressed', item.purchased);
            toggleBtn.textContent = item.purchased ? '✅' : '◻️';

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.dataset.removeId = item.id;
            removeBtn.textContent = 'X';

            actions.appendChild(toggleBtn);
            actions.appendChild(removeBtn);

            li.appendChild(left);
            li.appendChild(actions);
            list.appendChild(li);
        });
    });

    // Aggiorna il contatore
    const count = items.length;
    const counterEl = document.getElementById('counter');
    if (counterEl) counterEl.textContent = `Hai ${count} prodotti nella lista`;
}

// Inizializza gli event listener sugli elementi già presenti in index.html
document.addEventListener('DOMContentLoaded', () => {
    // Bottone aggiungi
    document.getElementById('addBtn').addEventListener('click', addItem);
    // Invio su prodotto o quantità
    document.getElementById('input').addEventListener('keydown', e => { if (e.key === 'Enter') addItem(); });
    document.getElementById('quantityInput').addEventListener('keydown', e => { if (e.key === 'Enter') addItem(); });

    // Event delegation: gestione click su rimuovi e sul pulsante toggle acquistato
    document.getElementById('list').addEventListener('click', (e) => {
        // Click su pulsante rimuovi
        const removeBtn = e.target.closest('button[data-remove-id]');
        if (removeBtn) {
            const id = removeBtn.dataset.removeId;
            removeItem(id);
            return;
        }

        // Click sul pulsante toggle acquistato
        const toggleBtn = e.target.closest('button[data-toggle-id]');
        if (toggleBtn) {
            const id = toggleBtn.dataset.toggleId;
            const it = items.find(it => it.id === id);
            if (it) {
                it.purchased = !it.purchased;
                renderList();
            }
            return;
        }
    });

    // Evidenziazione per categoria selezionata (al cambiamento della select)
    // La select separata di filtro/visualizzazione
    const filterSelect = document.getElementById('filterCategorySelect');
    function highlightCategory() {
        const selected = filterSelect.value;
         // Seleziona tutte le liste
         document.querySelectorAll('#list .list-item').forEach(li => {
             if (!selected || selected === li.dataset.category) {
                 li.classList.add('highlight');
                 li.classList.remove('dimmed');
             } else {
                 li.classList.remove('highlight');
                 li.classList.add('dimmed');
             }
         });
     }
     // Aggiorna al change e anche quando si passa con la tastiera (input)
    filterSelect.addEventListener('change', highlightCategory);
    filterSelect.addEventListener('input', highlightCategory);
     // Aggiorna evidenziazione iniziale
     highlightCategory();

     // Render iniziale (lista vuota)
     renderList();
 });
