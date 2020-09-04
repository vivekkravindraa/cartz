import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './AutoCarouselOne.css';

const AutoCarouselOne = ({ bannerItems }) => {
    return (
        <div className="autoCarouselOneContainer" id="autoCarouselOne">
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

export default AutoCarouselOne;
