import React from 'react';
import Navigation from '../Navigation/Navigation';
import { homeBannerItems } from './SliderItemsJsonData';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Slider.css';

const Slider = () => {
    return (
        <div className="sliderContainer">
            <div className="absoluteNavigation">
                <Navigation />
            </div>
            <Carousel autoPlay infiniteLoop={true} showArrows={false} showThumbs={false}>
                {
                    homeBannerItems.map((galleryImage, index) => {
                        return (
                            <img key={index} id="bannerImage" src={galleryImage} alt="no_image" />
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default Slider;
