import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './components/CheckoutForm'
import ProductCard from './components/ProductCard'
import './App.css'

// Cargar Stripe con tu clave pública
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const products = [
  {
    id: 1,
    name: 'Producto Premium',
    price: 2999, // En centavos (29.99 USD)
    description: 'Un producto premium con características avanzadas',
  },
  {
    id: 2,
    name: 'Producto Básico',
    price: 1499, // En centavos (14.99 USD)
    description: 'Un producto básico perfecto para empezar',
  }
]

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showCheckout, setShowCheckout] = useState(false)

  const handleBuyNow = (product) => {
    setSelectedProduct(product)
    setShowCheckout(true)
  }

  const handleBackToProducts = () => {
    setShowCheckout(false)
    setSelectedProduct(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Tienda con Stripe</h1>
        <p>Prueba de concepto - Pasarela de pago con Stripe</p>
      </header>

      {!showCheckout ? (
        <main className="products-container">
          <h2>Nuestros Productos</h2>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyNow={handleBuyNow}
              />
            ))}
          </div>
        </main>
      ) : (
        <main className="checkout-container">
          <button 
            className="back-button"
            onClick={handleBackToProducts}
          >
            ← Volver a productos
          </button>
          
          <div className="checkout-content">
            <div className="product-summary">
              <h3>Resumen del pedido</h3>
              <div className="selected-product">
                <div>
                  <h4>{selectedProduct.name}</h4>
                  <p>${(selectedProduct.price / 100).toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="payment-form">
              <h3>Información de pago</h3>
              <Elements stripe={stripePromise}>
                <CheckoutForm 
                  product={selectedProduct}
                  onSuccess={handleBackToProducts}
                />
              </Elements>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default App
