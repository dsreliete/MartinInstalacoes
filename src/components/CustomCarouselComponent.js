import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CustomCarousel extends Component {
    

    render() {
        const slides = this.props.items.map((item) => {
            return (
                <div>
                    <img src={item.src} alt={item.altText} />
                    <p className="carousel-caption">{item.message}</p>
                </div>
            );
        });

        return (
            <Carousel 
                showStatus={false} 
                showIndicators={false} 
                showThumbs={false} 
                infiniteLoop={true}
                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (<div className="carousel-control-prev" onClick={onClickHandler}></div>)
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && ( <div className="carousel-control-next" onClick={onClickHandler}></div>)
                }
            >
                {slides}
            </Carousel>
        );
    }
}

export default CustomCarousel;