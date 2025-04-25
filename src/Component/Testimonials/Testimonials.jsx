import React, { useRef } from "react";
import "./Testimonial.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0); // <-- track tx persistently

  const slideForward = () => {
    if (tx.current > -75) { // adjust based on number of slides
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`; // add %
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`; // add %
  };

  return (
    <div className="testimonials" id='Testimonial'>
      <button className="prev-btn" onClick={slideBackward}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={slideForward}>
        <FaChevronRight />
      </button>
      <div className="slider">
        <ul ref={slider} className="slider-track">
        <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Divya Suresh</h3>
                  <span>Event Organizer</span>
                </div>
              </div>
              <p>
                The eco-friendly plates were a hit at our event! They’re
                durable, elegant, and completely biodegradable. Highly
                recommend!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Rahul Iyer</h3>
                  <span>Wedding Planner</span>
                </div>
              </div>
              <p>
                Finally found plates that align with my values. Great quality
                and no guilt about waste. Love it!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Nithya </h3>
                  <span>Eco-Conscious Customer</span>
                </div>
              </div>
              <p>
                These plates are amazing! I love how sturdy they are and that
                I’m helping the environment.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Anjali Rao</h3>
                  <span>Catering Business Owner</span>
                </div>
              </div>
              <p>
                I’ve switched to using these plates for all my catering gigs.
                They add a premium touch while being good for the planet.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
