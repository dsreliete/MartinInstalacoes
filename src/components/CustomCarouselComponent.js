import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class CustomCarousel extends Component {
    render() {
        const slides = this.props.items.map((item) => {
            return (
                <div>
                    <img src={item.src} alt={item.altText} />
                    <h4 className="carousel-caption">{item.message}</h4>
                </div>
            );
        });

        return (
            <Carousel 
                autoPlay
                showStatus={false} 
                showIndicators={false} 
                showThumbs={false} 
                infiniteLoop={true}>
                {slides}
            </Carousel>
        );
    }
}

export default CustomCarousel;