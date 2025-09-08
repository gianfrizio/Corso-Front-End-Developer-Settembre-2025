# 🔮 Magic Place

Un sito web moderno e interattivo per la vendita di oggetti magici, realizzato con HTML5, CSS3 puro e design responsive.

![Negozio Magico](https://img.shields.io/badge/Magia-100%25-purple) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![Responsive](https://img.shields.io/badge/Responsive-✓-green)

## 🌟 Caratteristiche Principali

### ✨ Design Moderno
- **Layout responsive** - Perfettamente adattabile a desktop, tablet e mobile
- **Gradients avanzati** - Sfondi con sfumature eleganti e professionali
- **Animazioni CSS** - Transizioni fluide e effetti hover coinvolgenti
- **Glassmorphism** - Effetti vetro moderni con backdrop-filter
- **Typography elegante** - Font serif per un tocco classico e magico

### 🛍️ Funzionalità E-commerce
- **Catalogo prodotti** - Tre categorie principali: Bacchette, Pozioni, Libri
- **Pagine dettagliate** - Ogni categoria ha la sua pagina con prodotti specifici
- **Prezzi e descrizioni** - Informazioni complete per ogni articolo
- **Offerte speciali** - Sezione dedicata con sconti e promozioni

### 📱 Interfaccia Utente
- **Navigazione intuitiva** - Menu principale con link alle sezioni
- **Form di contatto avanzato** - Modulo completo con validazione HTML5
- **Informazioni di contatto** - Dettagli completi con orari e social media
- **Sezione "Chi Siamo"** - Storia dell'azienda e team di esperti

## 🏗️ Struttura del Progetto

```
Sito-personale/
├── index.html              # Homepage principale
├── bacchette.html          # Catalogo bacchette magiche
├── pozioni.html            # Catalogo pozioni e elisir
├── libri.html              # Catalogo libri di magia
├── css/
│   └── styles.css          # Fogli di stile principali
└── images/
    ├── logo.svg            # Logo del negozio
    ├── bacchetta.svg       # Icona bacchette
    ├── pozione.svg         # Icona pozioni
    └── libro.svg           # Icona libri
```

## 🎨 Tecnologie Utilizzate

- **HTML5** - Markup semantico e accessibile
- **CSS3** - Styling avanzato con:
  - CSS Grid e Flexbox per layout responsive
  - Custom Properties (variabili CSS)
  - Animazioni e transizioni
  - Gradients e backdrop-filter
  - Media queries per responsive design

## 🚀 Come Visualizzare il Sito

### Opzione 1: Server locale (Python)
```bash
# Naviga nella cartella del progetto
cd Sito-personale

# Avvia server HTTP locale
python3 -m http.server 8001

# Apri nel browser
open http://localhost:8001
```

### Opzione 2: Server locale (Node.js)
```bash
# Installa http-server globalmente
npm install -g http-server

# Naviga nella cartella e avvia
cd Sito-personale
http-server -p 8001

# Apri nel browser
open http://localhost:8001
```

### Opzione 3: Apertura diretta
Apri semplicemente il file `index.html` nel tuo browser preferito.

## 📦 Sezioni del Sito

### 🏠 Homepage (`index.html`)
- **Header** con logo animato e navigazione
- **Hero section** con presentazione del negozio
- **Sezione prodotti** con link alle categorie
- **Offerte speciali** con sconti e promozioni
- **Chi siamo** con storia e team
- **Contatti** con form moderno e informazioni complete

### 🪄 Bacchette Incantate (`bacchette.html`)
- **6 bacchette diverse** con caratteristiche uniche
- **Materiali specifici** (quercia, salice, ebano, betulla, vischio, acero)
- **Nuclei magici** (crine di unicorno, piuma di fenice, cordolo di drago)
- **Prezzi da €75 a €299**

### 🧪 Pozioni Miracolose (`pozioni.html`)
- **6 pozioni magiche** per diversi usi
- **Effetti dettagliati** (guarigione, forza, invisibilità, amore, saggezza, volo)
- **Ingredienti specifici** e dosaggi
- **Prezzi da €45 a €200**

### 📚 Libri di Magia (`libri.html`)
- **6 libri specializzati** per tutti i livelli
- **Argomenti vari** (basi, alchimia, incantesimi, draghi, tempo, erbologia)
- **Livelli di difficoltà** (principiante, intermedio, avanzato, esperto, maestro)
- **Prezzi da €35 a €350**

## 🎯 Caratteristiche Tecniche

### Responsive Design
- **Mobile-first approach**
- **Breakpoints ottimizzati** per tutti i dispositivi
- **Grid system flessibile**
- **Touch-friendly buttons** e form

### Performance
- **Immagini SVG** per scalabilità perfetta
- **CSS ottimizzato** senza framework esterni
- **Loading veloce** con risorse minime
- **SEO-friendly** con markup semantico

### Accessibilità
- **Contrasto colori** ottimizzato
- **Focus states** visibili per navigazione da tastiera
- **Alt text** per tutte le immagini
- **Form labels** appropriati

## 🔧 Personalizzazione

### Colori Principali
```css
:root {
  --primary-purple: #8A2BE2;
  --dark-purple: #4B0082;
  --gold: #FFD700;
  --orange: #FFA500;
}
```

### Font
- **Font principale**: Georgia, serif
- **Fallback**: Times New Roman, serif

## 📄 Licenza

Progetto educativo realizzato per il corso Front-End Developer Settembre 2025.

## 👨‍💻 Autore

Sviluppato da gianfrizio con un pizzico di magia ✨

---

**Nota**: Questo è un progetto dimostrativo per scopi educativi. Il negozio e i prodotti sono completamente fittizi! 🎭
