import React from "react";
import "./Contact.css";
import msg from '../../assets/msg-icon.png'
import email from '../../assets/mail-icon.jpg'
import phno from '../../assets/phone-icon.jpg'
import address from '../../assets/location-icon.jpg'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0efd459b-1e0a-4a52-9381-2f994974b99f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" id='Contact'>
          <div className="contact-col">
              <h3>Send us a message <img src={msg} alt="" /></h3> 
              <p>Feel free to reach out through the contact form or use the details below. We value your thoughts, questions, and ideas as we work together toward a greener, more sustainable future.</p>
              <ul>
                  <li><img src={email} alt="" />Sathya.mrp3@gmail.com</li>
                  <li><img src={phno} alt="" />+91-6380926230</li>
                  <li><img src={address} alt="" />1/207 Ram Nagar , Coimbatore-Tamil Nadu</li>
</ul>
          </div>
          <div className="contact-col">
              <form onSubmit={onSubmit}>
                  <label htmlFor="">Your Name</label>
                  <input type="text" name='user-name' placeholder=" Enter your name" required />
                  <label htmlFor="">Phone Number</label>
                  <input type="text" name='user-phno' placeholder=" Enter your Phone Number" required/>
                  <label htmlFor="">Your Email</label>
                  <input type="email" name='user-email' placeholder=" Enter your Your Email" required />
                  <label htmlFor=""> Write your messages here</label>
                  <textarea name="message" id="" rows='6' placeholder="Enter your message" required></textarea>
                  <button type="submit" className="btn dark-btn"> Submit</button>
                  
              </form>
              <span>{result}</span>
          </div>
    </div>
  );
};

export default Contact;
