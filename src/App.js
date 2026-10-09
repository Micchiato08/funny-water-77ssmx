import "./styles.css";

export default function App() {
  return (
    <div className="product-card">
      <img 
      src="/product-image.jpg"
      className="product-image"
      />
      <span className="productName">NoiseCancel</span>
      <span className="productPrice">$199.99</span>
      <button className="ctaButton">Add to Cart</button>

    </div> 
  );
}
