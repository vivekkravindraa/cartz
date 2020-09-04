import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './AutoCarouselTwo.css';

const AutoCarouselTwo = ({ bannerItems }) => {
    return (
        <div className="autoCarouselTwoContainer" id="autoCarouselTwo">
            <Carousel autoPlay infiniteLoop={true} showArrows={false} showThumbs={false}>
                {
                    bannerItems.map((galleryImage, index) => {
                        return (
                            <img key={index} id="bannerImage" src={galleryImage} alt="no_image" />
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default AutoCarouselTwo;
