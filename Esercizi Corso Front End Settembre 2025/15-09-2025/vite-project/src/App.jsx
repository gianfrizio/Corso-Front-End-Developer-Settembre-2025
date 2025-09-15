import './App.css'
import { useRef, useState } from 'react'
import ProductCard from './components/ProductCard'
import WelcomeCard from './components/WelcomeCard'

function App() {
  const [started, setStarted] = useState(false)
  const productsRef = useRef(null)

  const handleStart = () => {
    setStarted(true)
    requestAnimationFrame(() => {
      if (productsRef.current) {
        productsRef.current.scrollIntoView({ behavior: 'smooth' })
        productsRef.current.focus({ preventScroll: true })
      }
    })
  }

  return (
    <main style={{ padding: 20 }}>
      <WelcomeCard name="Maria" subtitle="Benvenuta nel progetto Vite" onStart={handleStart} />

      {started && (
        <section id="products" ref={productsRef} tabIndex={-1} style={{ marginTop: 20 }}>
          <h2>Products</h2>
          <div className="cards-grid">
            <ProductCard
              product={{
                name: 'iPhone 15',
                price: 999,
                description: "L'ultimo smartphone Apple",
                image: '',
                rating: 5,
              }}
            />

            <ProductCard
              product={{
                name: 'Notebook',
                price: 9.5,
                description: 'Quaderno A4',
                image: '',
                rating: 4,
              }}
            />

            <ProductCard
              product={{ name: 'Cuffie', price: 59, description: 'Wireless', image: '', rating: 3 }}
            />
          </div>
        </section>
      )}
    </main>
  )
}

export default App
