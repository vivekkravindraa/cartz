import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './ProductGallery.css';

const ProductGallery = ({ productImages }) => {
    return (
        <div className="productGalleryContainer" id="productGallery">
            <Carousel autoPlay infiniteLoop={true} showArrows={false} showThumbs={false} dynamicHeight={true}>
                {
                    productImages.map((galleryImage, index) => {
                        return (
                            <img key={index} src={galleryImage} alt="no_image" />
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default ProductGallery;
