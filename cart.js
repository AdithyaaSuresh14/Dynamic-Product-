import React from "react";
import "./cart.css";

const Cart = ({ cartItems, goBack }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))
      )}
      <button onClick={goBack}>Back to Products</button>
    </div>
  );
};

export default Cart;
