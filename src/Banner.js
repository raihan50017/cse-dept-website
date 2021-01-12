import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Banner.css';
import work1 from './images/bg-1.jpg';
import work2 from './images/bg-1.jpg';
import work3 from './images/bg-1.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
               <Carousel.Item interval={1000}>
                  <img className="d-block w-100 m-auto image"
                  src={work1} alt="First slide"/>
                  <div className="main-banner">
                     <Carousel.Caption className="slide_name">
                        <h3>Slide-1</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </Carousel.Caption>
                  </div>
               </Carousel.Item>
               <Carousel.Item interval={500}>
                  <img className="d-block w-100 m-auto image"
                  src={work2} alt="Third slide"/>
                  <div className="main-banner">
                     <Carousel.Caption className="slide_name">
                        <h3>Slide-2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption>
                  </div>
               </Carousel.Item>
               <Carousel.Item>
                  <img className="d-block w-100 m-auto image"
                  src={work3} alt="Third slide"/>
                  <div className="main-banner">
                     <Carousel.Caption className="slide_name">
                        <h3>Slide-3</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
                  </div>
               </Carousel.Item>
            </Carousel>
            <div className="overlay"></div>
        </div>
    );
};

export default Banner;