import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css';
import '../styles/Navbar.css'; // Assuming Navbar styles are needed here
import axios from 'axios';

export default function Testimonials() {
  const[testimonial,setTestimonial] = useState(null);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(null);

  useEffect(()=>{
   axios
   .get(`https://vegetablesdelivery-server.onrender.com/testimonials`)
   .then((response)=>{
    if(Array.isArray(response.data)){
      setTestimonial(response.data);

    }else{
      console.error("unexpected API response",response.data);
      setTestimonial([]);
    }
    setLoading(false);
   })
   .catch((error)=>{
     setError("Failed to fetch products details.");
        setLoading(false);
   })

  },[])
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const settings = {
    dots: true,           // shows circle dots below slider
    infinite: true,       // infinite looping
    speed: 500,           // slide speed
    slidesToShow: 1,      // show one testimonial at a time
    slidesToScroll: 1,    // scroll one at a time
    autoplay: true,       // auto-slide
    autoplaySpeed: 5000,  // 5 seconds per slide
    arrows: false,        // hide next/prev arrows
  };

  return (
    <section className="testimonials">
      <div className="section-title">
        <p className="subheading">Testimony</p>
        <h2>Our satisfied customer says</h2>
        <p className="description">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <Slider {...settings} className="testimonial-slider">
        {testimonial.map((testData) => (
          <div className="testimonial-item" key={testData.id}>
            <img src={testData.img} alt={testData.name} className="customer-img" />
            <div className="quote-icon">❝</div>
            <p>{testData.text}</p>
            <h5>{testData.name}</h5>
            <span>{testData.role}</span>
          </div>
        ))}
      </Slider>
    </section>
  );
}
