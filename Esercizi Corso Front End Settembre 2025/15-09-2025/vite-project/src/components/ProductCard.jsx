import React from 'react'
import './components.css'

// Componente che mostra solo informazioni sul product passato come prop
function ProductCard({ product }) {
  if (!product) return null

  const { name, price, description, image, rating } = product

  return (
    <div className="product-card card">
      {image ? (
        <img src={image} alt={name} className="card-image" />
      ) : (
        <div className="card-image placeholder">No image</div>
      )}

      <h3>{name}</h3>

      <p className="price">€{price}</p>

      {description && <p className="description">{description}</p>}

      <div className="rating">{'⭐'.repeat(Math.max(0, Math.min(5, rating || 0)))}</div>
    </div>
  )
}
export default ProductCard
