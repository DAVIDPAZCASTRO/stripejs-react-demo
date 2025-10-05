const ProductCard = ({ product, onBuyNow }) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">
            ${(product.price / 100).toFixed(2)}
          </span>
          <button
            className="buy-button"
            onClick={() => onBuyNow(product)}
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard