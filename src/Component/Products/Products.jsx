import React from "react";
import "./Product.css";
import arcea from "../../assets/areca.png";
import bagasse from "../../assets/Bagasse.png";
import  paper from "../../assets/paper.png";

const Products = () => {
  return (
    <div className="products">
      <div className="product">
        <img src={arcea} alt="" />
        <div className="caption">
          <h3>Areca Leaf Plates</h3>
          <p>100% biodegradable, sturdy and stylish.</p>
        </div>
      </div>
      <div className="product">
        <img src={bagasse} alt="" />
        <div className="caption">
          <h3>Bagasse Plates</h3>
          <p>Made from sugarcane waste, compostable and durable.</p>
        </div>
      </div>
      <div className="product">
        <img src={paper} alt="" />
        <div className="caption">
          <h3>Paper Eco Plates</h3>
          <p>Lightweight, recyclable, and perfect for events.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
