import React from "react";
import "./shop.css";
import { products } from "../../assets/shop.js";

const Shop = () => {
  return (
    <div className="shop-section" id='Shop'>
      <div className="product-grid">
              {products.map((product) => {
            return(
          <div className="product-card" key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="btn">Add to Cart</button>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Shop;
