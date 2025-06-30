import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/productapi";
import ProductCard from "./productcard";
import "./productlist.css"; 

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list-container">
      <h1 className="title">Products</h1>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};


export default ProductList;
