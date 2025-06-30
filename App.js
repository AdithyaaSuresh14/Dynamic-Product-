import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/productlist";
import Cart from "./components/cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    alert("Added to cart");
  };

  return (
    <div className="App">
      <div className="top-bar">
        <h1>Product List</h1>
        <button onClick={() => setShowCart(true)}>
          Cart ({cartItems.length})
        </button>
      </div>

      {showCart ? (
        <Cart cartItems={cartItems} goBack={() => setShowCart(false)} />
      ) : (
        <ProductList onAddToCart={handleAddToCart} />
      )}
    </div>
  );
}

export default App;
