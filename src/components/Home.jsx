import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from '../assets/image/hero-image.png';
import img2 from '../assets/image/hero-image2.png';
import img3 from '../assets/image/hero-image3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Carousel
        infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} showIndicators={false} interval={3000}
      >
        <div className='carousel-item'>
          <img src={img1} alt="img1" />
          <div className='carousel-caption'>
            <h2>AGRO APP</h2>
            <p>Discover Government Aided Schemes supporting farmers</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img src={img2} alt="img2" />
          <div className='carousel-caption'>
            <h2>AGRO APP</h2>
            <p>Discover Government Aided Schemes supporting farmers</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img src={img3} alt="img3" />
          <div className='carousel-caption'>
            <h2>AGRO APP</h2>
            <p>Discover Government Aided Schemes supporting farmers</p>
          </div>
        </div>
      </Carousel>
      <section id="scheme-section">
        <div className="text-wrapper">
          <div className="title-text">
            <h1>Namaskar Dosto!</h1>
            <p className="subheading">
              Welcome to Agroapp, a platform which helps you find the best
              <br />Government Aided Schemes for Farmers
            </p>
          </div>
          <div className="btn-wrapper">
            <button className="find-btn">Find schemes for you ➜</button>
          </div>
        </div>
        <section className="scheme-section">
          <div className="scheme-container">
            <div className="scheme-item">
              <span className="scheme-count">2010+</span>
              <div className="scheme-info">
                <span className="scheme-title">Total Schemes →</span>
              </div>
            </div>
            <div className="scheme-item">
              <span className="scheme-count">520+</span>
              <div className="scheme-info">
                <span className="scheme-title">Central Schemes →</span>
              </div>
            </div>
            <div className="scheme-item">
              <span className="scheme-count">1490+</span>
              <div className="scheme-info">
                <span className="scheme-title">States/UTs Schemes →</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Home