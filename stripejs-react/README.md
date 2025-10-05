# 🛒 React + Vite + Stripe - Prueba de Concepto

Una aplicación de demostración que integra **Stripe** como pasarela de pago en un proyecto de **React** con **Vite**.

## 🚀 Características

- ✅ **React 18** con Vite para desarrollo rápido
- ✅ **Stripe Elements** para formularios de pago seguros
- ✅ **Interfaz responsive** y moderna
- ✅ **Productos de ejemplo** para probar el flujo completo
- ✅ **Tarjetas de prueba** de Stripe incluidas
- ✅ **Simulación** de procesamiento de pagos

## 📋 Requisitos Previos

1. **Node.js** (versión 16 o superior)
2. **Cuenta de Stripe** (para obtener las claves API)

## 🛠️ Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

1. Copia el archivo `.env.example` como `.env`:
   ```bash
   cp .env.example .env
   ```

2. Obtén tu clave pública de Stripe:
   - Ve a [Stripe Dashboard](https://dashboard.stripe.com/)
   - En el menú lateral: **Developers** > **API keys**
   - Copia tu **Publishable key** (comienza con `pk_test_`)

3. Actualiza el archivo `.env`:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_tu_clave_aqui
   ```

### 3. Ejecutar el proyecto

```bash
npm run dev
```

El proyecto se abrirá en `http://localhost:5173`

## 🧪 Probando la Integración

### Tarjetas de Prueba de Stripe

Puedes usar estas tarjetas para probar los pagos:

- **Visa**: `4242 4242 4242 4242`
- **Mastercard**: `5555 5555 5555 4444`
- **Declined**: `4000 0000 0000 0002`

**Notas importantes:**
- Usa cualquier fecha de expiración futura
- Usa cualquier CVC de 3 dígitos
- **No se realizarán cargos reales** - es solo una simulación

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── CheckoutForm.jsx    # Formulario de pago con Stripe Elements
│   └── ProductCard.jsx     # Tarjeta de producto
├── App.jsx                 # Componente principal
├── App.css                 # Estilos principales
└── main.jsx               # Punto de entrada
```

## 🔧 Componentes Principales

### CheckoutForm
- Integra **Stripe Elements** para el formulario de pago
- Maneja la creación de **PaymentMethod**
- Simula el proceso de pago completo
- Incluye validación y manejo de errores

### ProductCard
- Muestra productos con imagen, nombre, descripción y precio
- Botón "Comprar ahora" para iniciar el checkout

## 🚀 Próximos Pasos para Producción

Para usar esta integración en producción, necesitarías:

1. **Backend/API** para:
   - Crear **PaymentIntents** en Stripe
   - Manejar webhooks de Stripe
   - Verificar pagos del lado del servidor

2. **Seguridad**:
   - Usar claves **live** de Stripe (no test)
   - Implementar autenticación de usuarios
   - Validar todos los datos del lado del servidor

3. **Base de datos** para:
   - Gestionar productos reales
   - Almacenar pedidos y transacciones
   - Manejar inventario

## 📚 Recursos Útiles

- [Documentación de Stripe](https://stripe.com/docs)
- [Stripe React Library](https://stripe.com/docs/stripe-js/react)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 🎯 Demo en Vivo

Una vez configurado, la aplicación incluye:
- Catálogo de productos de ejemplo
- Flujo completo de checkout
- Formulario de pago integrado con Stripe
- Feedback visual del estado del pago

---

**⚠️ Importante**: Esta es una **prueba de concepto** con fines educativos. No procesa pagos reales y no debe usarse en producción sin implementar las medidas de seguridad necesarias.
