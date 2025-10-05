import { useState } from 'react'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js'

const CheckoutForm = ({ product, onSuccess }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)
    setError(null)

    const cardElement = elements.getElement(CardNumberElement)

    try {
      // En una aplicación real, crearías un PaymentIntent en tu backend
      // Aquí simularemos el proceso
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: 'Cliente de prueba',
        },
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      // Simular procesamiento de pago exitoso
      console.log('PaymentMethod creado:', paymentMethod)
      
      // En una app real, enviarías el paymentMethod.id a tu backend
      // para completar el pago con stripe.paymentIntents.confirm()
      
      setSuccess(true)
      setTimeout(() => {
        onSuccess()
      }, 2000)

    } catch (err) {
      setError('Error procesando el pago')
      console.error('Error:', err)
    }

    setLoading(false)
  }

  if (success) {
    return (
      <div className="payment-success">
        <div className="success-icon">✅</div>
        <h3>¡Pago exitoso!</h3>
        <p>Tu pedido ha sido procesado correctamente.</p>
        <p className="note">
          <strong>Nota:</strong> Esta es una simulación. No se ha realizado ningún cargo real.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="card-field">
        <label>Número de tarjeta</label>
        <div className="card-input">
          <CardNumberElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <div className="card-row">
        <div className="card-field">
          <label>Fecha de expiración</label>
          <div className="card-input">
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="card-field">
          <label>CVC</label>
          <div className="card-input">
            <CardCvcElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`pay-button ${loading ? 'loading' : ''}`}
      >
        {loading ? '⏳ Procesando...' : `💳 Pagar $${(product.price / 100).toFixed(2)}`}
      </button>

      <p className="test-info">
        <strong>Tarjetas de prueba:</strong><br />
        • 4242 4242 4242 4242 (Visa)<br />
        • 5555 5555 5555 4444 (Mastercard)<br />
        • Cualquier fecha futura y CVC
      </p>
    </form>
  )
}

export default CheckoutForm