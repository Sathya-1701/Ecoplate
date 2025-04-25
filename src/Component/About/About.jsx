import React from "react";
import "./About.css";
import about from "../../assets/about.jpeg";

const About = () => {
  return (
    <div className="about" id='About'>
      <div className="about-left">
        <img src={about} alt="" />
      </div>
      <div className="about-right">
        <h4 className="">About EcoPlate</h4>
        <h2 className="">Crafting Sustainable Plates for a Greener Planet</h2>
        <p>
          At EcoPlates, we’re passionate about sustainability and conscious
          living. Our mission is to offer natural alternatives to plastic
          disposables. We craft plates from areca palm leaves, sugarcane
          bagasse, and recycled paper. Every product is 100% biodegradable,
          compostable, and chemical-free. We aim to make eco-friendly choices
          both accessible and affordable.
        </p>
        <p>
          Our plates are not just sustainable — they’re strong, elegant, and
          reliable. Whether it’s hot meals or cold desserts, they handle it all
          with ease. Perfect for parties, weddings, picnics, and daily use at
          home or cafes. We follow strict quality standards to ensure safety and
          satisfaction. Choosing EcoPlates means choosing the Earth, without
          compromise.
        </p>
        <p>
          We envision a future free of single-use plastic waste. With every
          plate you use, you help protect the planet for generations. Our team
          works tirelessly to innovate greener packaging and products. We
          collaborate with local farmers and artisans to support
          eco-communities. Together, we can inspire change — one plate at a
          time.
        </p>
      </div>
    </div>
  );
};

export default About;
