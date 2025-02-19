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
        infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} showIndicators={false} interval={1000}
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
    </div>
  )
}

export default Home;