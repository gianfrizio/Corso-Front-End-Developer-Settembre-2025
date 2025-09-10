// Dati prodotti (catalogo)
const productCatalog = [
  { id: 1, name: "Quaderno", price: 4, imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=180&h=120&fit=crop&crop=center" },
  { id: 2, name: "Penna", price: 1, imageUrl: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=180&h=120&fit=crop&crop=center" },
  { id: 3, name: "Zaino", price: 25, imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=180&h=120&fit=crop&crop=center" },
  { id: 4, name: "Tazza", price: 5, imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=180&h=120&fit=crop&crop=center" }
];

// Carrello inizialmente vuoto
const cart = [];

// Selettori
var catalogEl = document.getElementById('catalog');
var cartEl = document.getElementById('cart');
var totalEl = document.getElementById('total');

// Mostra il catalogo
function showCatalog() {
  // pulisco (uso replaceChildren per evitare innerHTML)
  if (!catalogEl) return;
  catalogEl.replaceChildren();
	// ciclo i prodotti
  for (var i = 0; i < productCatalog.length; i++) {
    var p = productCatalog[i];
	// crea card
    var card = document.createElement('article');
    card.className = 'product-card';
	// crea immagine
    var img = document.createElement('img');
    img.src = p.imageUrl;
    img.alt = p.name;
    card.appendChild(img);
	// crea info
    var info = document.createElement('div');
    info.className = 'product-info';
    var title = document.createElement('h3');
    title.textContent = p.name;
    var price = document.createElement('p');
    price.textContent = '€ ' + p.price;
    info.appendChild(title);
    info.appendChild(price);
    card.appendChild(info);
	// crea bottone
    var btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'Aggiungi al Carrello';
    btn.setAttribute('data-id', p.id);
    // evento add
    btn.addEventListener('click', function (e) {
      var id = parseInt(e.target.getAttribute('data-id'), 10);
      addToCart(id);
    });
	// aggiunge bottone alla card
    card.appendChild(btn);
	// aggiunge tutto alla riga
    catalogEl.appendChild(card);
  }
}

// Aggiungi prodotto al carrello
function addToCart(productId) {
  // cerca nel carrello per verificare se esiste già
  var found = null;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      found = cart[i];
      break;
    }
  }

  if (found) {
    // incrementa quantità
    found.quantity = found.quantity + 1;
  } else {
    // aggiungi nuovo oggetto
    cart.push({ productId: productId, quantity: 1 });
  }

  updateCart();
  updateTotal();
}

// Aggiorna visuale carrello
function updateCart() {
  if (!cartEl) return;
  cartEl.replaceChildren();

  if (cart.length === 0) {
    var empty = document.createElement('p');
    empty.textContent = 'Carrello vuoto';
    empty.className = 'muted';
    cartEl.appendChild(empty);
    return;
  }
  // ciclo gli elementi del carrello
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    // trova prodotto corrispondente
    var product = null;
    for (var j = 0; j < productCatalog.length; j++) {
      if (productCatalog[j].id === item.productId) {
        product = productCatalog[j];
        break;
      }
    }
	// crea riga carrello
    var row = document.createElement('div');
    row.className = 'cart-item';
	// crea metadati
    var meta = document.createElement('div');
    meta.className = 'meta';
    var name = document.createElement('div');
    name.textContent = product.name + ' x ' + item.quantity;
    var subtotal = document.createElement('div');
    subtotal.textContent = '€ ' + (product.price * item.quantity);
    meta.appendChild(name);
    meta.appendChild(subtotal);
	// crea bottone rimuovi
    var removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Rimuovi';
    removeBtn.setAttribute('data-id', item.productId);
    // evento remove
    removeBtn.addEventListener('click', function (e) {
      var id = parseInt(e.target.getAttribute('data-id'), 10);
      removeFromCart(id);
    });
	// aggiunge tutto alla riga
    row.appendChild(meta);
    row.appendChild(removeBtn);
    cartEl.appendChild(row);
  }
}

// Rimuovi (decrementa o elimina)
function removeFromCart(productId) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      if (cart[i].quantity > 1) {
        cart[i].quantity = cart[i].quantity - 1;
      } else {
        // rimuovi elemento dall'array
        cart.splice(i, 1);
      }
      break;
    }
  }

  updateCart();
  updateTotal();
}

// Calcola e mostra il totale
function updateTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    // trova prodotto corrispondente	
    var product = null;
    for (var j = 0; j < productCatalog.length; j++) {
      if (productCatalog[j].id === item.productId) {
        product = productCatalog[j];
        break;
      }
    }
    total = total + (product.price * item.quantity);
  }

  totalEl.textContent = 'Totale: € ' + total;
}

// Inizializzazione al DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  showCatalog();
  updateCart();
  updateTotal();
});


