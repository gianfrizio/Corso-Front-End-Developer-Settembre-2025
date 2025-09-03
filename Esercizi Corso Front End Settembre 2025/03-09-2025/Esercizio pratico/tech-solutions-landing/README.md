# Tech Solutions Landing Page

## Panoramica
Questo progetto è una landing page responsive per una fittizia azienda di consulenza tecnologica, "Tech Solutions". La pagina è sviluppata con standard web moderni, con attenzione all'accessibilità, all'interattività e all'ottimizzazione.

## Struttura del progetto
```
tech-solutions-landing
├── src
│   ├── index.html
│   ├── css
│   │   ├── styles.css
   │   │   └── utilities.css
│   ├── assets
│   │   └── images
│   │       ├── hero-image.svg
│   │       └── logo.svg
│   └── fonts
└── README.md
```
Uso
- Apri `src/index.html` nel browser per visualizzare la landing page.
- Per personalizzare il contenuto modifica direttamente `src/index.html` e i fogli di stile in `src/css/`.
- Per servire la pagina localmente (consigliato) puoi usare un server HTTP semplice dalla cartella `src`:

```bash
cd src
python3 -m http.server 8000 --bind 127.0.0.1
# poi apri http://127.0.0.1:8000/ nel browser
```

Nota: i frammenti che prima erano in `src/components/` sono stati incorporati in `src/index.html`. Se vuoi mantenere i frammenti separati come backup, sono disponibili nella cartella `src/components/` oppure puoi rimuoverla.
- Design responsive: il layout si adatta a diverse dimensioni dello schermo usando Flexbox e Grid.
- Accessibilità: supporto per navigazione da tastiera e compatibilità con screen reader.
- Interattività: realizzata con pseudo-classi CSS e ancore (nessun JavaScript).
- Solo HTML e CSS: il progetto è stato semplificato per usare esclusivamente HTML e CSS come richiesto.

## Avvio rapido
1. **Clonare il repository**:
   ```
   git clone https://github.com/tuoutente/tech-solutions-landing.git
   ```
2. **Entrare nella cartella del progetto**:
   ```
   cd tech-solutions-landing
   ```
3. Apri `src/index.html` nel browser per visualizzare la landing page. Non sono necessari build step o dipendenze.

## Uso
- Apri `src/index.html` nel browser per vedere la pagina.
- Modifica i file in `src/components` per personalizzare i contenuti.

## Contributi
Contributi benvenuti: apri una issue o invia una pull request con suggerimenti.