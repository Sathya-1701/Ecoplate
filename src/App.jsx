import "./App.css";
import Hero from "./Component/Hero/Hero";
import Shop from "./Component/Shop/Shop";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";
import Title from "./Component/Title/Title";
import About  from "./Component/About/About";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR MESSION' title='Nature-Friendly Dining Essentials'/>
        <Products />
        <About />
        <Title subTitle='Our Products' title='Eco Plates Collection' />
        <Shop />
        <Title subTitle='TESTIMONIALS' title='Hear It From Our Happy Customers' />
        <Testimonials />
        <Title subTitle='CONTACT US' title='Get in Touch' />
        <Contact />
        <Footer/>
      
      </div>
    </>
  );
}

export default App;
