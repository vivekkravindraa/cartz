import React from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';

import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';
import Navigation from '../../../common-components/Navigation/Navigation';

import applePodsS from '../../../assets/images/product-description-assets/applePods/applePodsS.png';
import applePodsCaseS from '../../../assets/images/product-description-assets/applePodsCase/applePodsCaseS.png';
import applePodsCoverS from '../../../assets/images/product-description-assets/applePodsCover/applePodsCoverS.png';
import applePodsHeadS from '../../../assets/images/product-description-assets/applePodsHead/applePodsHeadS.png';
import applePodsOpenS from '../../../assets/images/product-description-assets/applePodsOpen/applePodsOpenS.png';
import applePodsSideS from '../../../assets/images/product-description-assets/applePodsSide/applePodsSideS.png';

import shoppingBag from '../../../assets/images/home-component-assets/shoppingBag/shoppingBag.svg';
import wishList from '../../../assets/images/product-description-assets/wishList/wishList.svg';
import iciciBankS from '../../../assets/images/product-description-assets/iciciBank/iciciBankS.png';
import location from '../../../assets/images/home-component-assets/location/location.png';
import frontArrow from '../../../assets/images/home-component-assets/frontArrow/frontArrow.png';

import share from '../../../assets/images/product-list-assets/share/share.svg';
import donut from '../../../assets/images/home-component-assets/donutChart/donutChart.svg';
import edit from '../../../assets/images/product-list-assets/edit/edit.svg';

import ProductGallery from '../ProductGallery/ProductGallery';

import Head from '../../../building-blocks/molecules/Head/Head';
import {
    similarProductsHead,
    frequentlyBoughtTogetherHead
} from '../../../building-blocks/molecules/Head/HeadItemsJsonData';
import {
    defaultHeadStyles,
    customHeadStyles,
    customMobileHeadStyles
} from '../../../building-blocks/molecules/Head/HeadStyles';

import ProductItems from '../../../building-blocks/molecules/Product/ProductItems';
import {
    similarProducts,
    frequentlyBoughtTogether
} from '../../../building-blocks/molecules/Product/ProductItemsJsonData';
import {
    productDescriptionStyles
} from '../../../building-blocks/molecules/Product/ProductStyles';

import './ProductDescription.css';

export default function ProductDescription() {
    const size = useWindowSize();

    const productImages = [
        applePodsS,
        applePodsCaseS,
        applePodsCoverS,
        applePodsHeadS,
        applePodsOpenS,
        applePodsSideS
    ];

    return (
        <div className="productDescription">
            <Header />
                {size.width >= 992 ? null : <div className="productDescriptionGallery">
                    <ProductGallery productImages={productImages} />
                </div>}
                <div className="productDescriptionContent">
                    <div className="productDescriptionImages">
                        {size.width >= 992 ? 
                            productImages.map((image, index) => {
                            return <div key={index} className="productDescriptionImage"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    border: '1px solid #e0e0e0',
                                    height: '410px'
                                }}
                            >
                            </div>
                        }) : null}
                    </div>
                    <div className="productDescriptionInfo">
                        <div className="productData">
                            {size.width >= 992 ? null :
                            <div className="productDescriptionShareSimilarProducts">
                                <div className="productDescriptionShare">
                                    <img src={share} alt="noImage" />
                                    <p>Share Details</p>
                                </div>
                                <div className="productDescriptionSimilarProducts">
                                    <img src={donut} alt="noImage" />
                                    <img src={donut} alt="noImage" />
                                    <p>Similar Products</p>
                                </div>
                            </div>}
                            <p className="productDescriptionName">Apple</p>
                            <p className="productDescriptionTitle">White 2nd Gen AirPods with Charging Case (White, True Wireless)</p>
                            <div className="productDescriptionPrices">
                                <p className="productDescriptionPrice">$ 40.23</p>
                                <p className="productDescriptionMarketPrice">$ 59.23</p>
                                <span className="productDescriptionSavingPrice"><p>Saving $ 19.23</p></span>
                            </div>
                        </div>
                        <div className="productDescriptionHighlights">
                            <p>Product Highlights</p>
                            <li>Active noise cancellation</li>
                            <li>Adaptive Equalizer vent system for pressure equalization</li>
                            <li>Apple driver custom high dynamic range amplifier</li>
                            <li>Transparency mode</li>
                            <div className="productDescriptionViews">
                                <p>OVER VIEW</p>
                                <p>VIEW SPECIFICATION</p>
                                <p>FAQs</p>
                            </div>
                            <div className="productDescriptionCartButtons">
                                <button className="productDescriptionAddToCart">
                                    <img src={shoppingBag} alt="noImage" height="16" />
                                    ADD TO CART
                                </button>
                                <button className="productDescriptionWishList">
                                    <img src={wishList} alt="noImage" height="16" />
                                    WISHLIST
                                </button>
                            </div>
                            {size.width >= 992 ? null : <p>KNOW MORE</p>}
                        </div>
                        {size.width >= 992 ? <div className="productDescriptionAddress">
                            <div className="productDescriptionSelectAddress">
                                <img src={location} alt="noImage" height="16" />
                                <p>Select An Address</p>
                            </div>
                            <p className="productDescriptionCheckStock">Check if Stock is Available At Your Pincode</p>
                            <div className="productDescriptionPincode">
                                <input id="productDescriptionPinInput" type="text" placeholder="Enter Delivery Pincode" />
                                <button>CHECK</button>
                            </div>
                        </div> : null}
                        <div className="productDescriptionBankOffers">
                            <div className="productDescriptionOffers">
                                <button>Bank Offers</button>
                                <button>Coupon Offers</button>
                            </div>
                            <div className="productDescriptionBankInfo">
                                <span className="productDescriptionBankImage"><img src={iciciBankS} alt="noImage" /></span>
                                <div className="productDescriptionBankDetails">
                                    <p>Icici Bank Credit Card Offer</p>
                                    <p>Additional 10% cash back on purchase using Icici Bank Credit Card</p>
                                    <p>Know More <img src={frontArrow} alt="noImage" height="8" /></p>
                                </div>
                            </div>
                        </div>
                        {size.width >= 992 ? null : <div className="productDescriptionDeliveryDetails">
                            <p className="productDescriptionDeliveryDetailsHeader">DELIVERY DETAILS</p>
                            <div className="productDescriptionDeliveryDetailsContent">
                                <div className="productDescriptionDeliverTo">
                                    <input type="radio" /><label>Deliver To - Rahul Roy</label>
                                </div>
                                <div className="productDescriptionDeliverToEdit">
                                    <img src={edit} alt="noImage" /><p>Edit</p>
                                </div>
                            </div>
                            <p className="productDescriptionLocation">Al Marsa Street, 66, Dubai Marina (2,710.67 km) P.O. Box 32923 Dubai, United Arab Emirates</p>
                            <li className="productDescriptionFreeDeliveryBy">FREE DELIVERY BY <b>TUESDAY, 26 DEC</b></li>
                        </div>}
                        <div className="productDescriptionWarranty">
                            <div className="productDescriptionWarrantyInfo">
                                <img src={iciciBankS} alt="noImage" height="32" />
                                <p>Apple</p>
                            </div>
                            <div className="productDescriptionWarrantyInfo">
                                <img src={iciciBankS} alt="noImage" height="32" />
                                <p>2 yr manufacture warranty</p>
                            </div>
                            <div className="productDescriptionWarrantyInfo">
                                <img src={iciciBankS} alt="noImgae" height="32" />
                                <p>10 day replacement</p>
                            </div>
                        </div>
                        {size.width >= 992 ? <div className="productDescriptionDetails">
                            <p>Product Details</p>
                            <div className="productDescriptionFeatures">
                                <p>FEATURES</p>
                                <p>Connections: AirPods: Bluetooth</p>
                                <p>Charging Case: Lighting connector</p>
                                <p>Accessibility: Live Listen audio?</p>
                            </div>
                            <div className="productDescriptionFeatures">
                                <p>AIRPODS SENSORS</p>
                                <p>Dual beamforming microphones</p>
                                <p>Dual optical sensors</p>
                                <p>Motion-detecting accelerometer</p>
                                <p>Speech-detecting accelerometer</p>
                            </div>
                            <div className="productDescriptionFeatures">
                                <p>MATERIAL & CASE</p>
                                <p>Follow manual on how best to care for your speakers</p>
                            </div>
                        </div> : null}
                        {size.width >= 992 ? <button className="productDescriptionBuyNow">BUY NOW</button> : null}
                    </div>
                </div>

                <Head data={similarProductsHead} styles={size.width >= 992 ? customHeadStyles : customMobileHeadStyles}>
                    <div style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(5, 2fr)',
                        'gridTemplateRows': 'auto auto',
                        'columnGap': '20px',
                        'padding': '25px 80px 50px 80px'
                    } : {
                        'display': 'grid',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '10px',
                        'margin': '0 0 0 10px'
                    }}>
                        <ProductItems productItems={similarProducts} styles={productDescriptionStyles} />
                    </div>
                </Head>

                <Head data={frequentlyBoughtTogetherHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(5, 2fr)',
                        'columnGap': '20px',
                        'padding': '25px 80px 50px 80px'
                    } : {
                        'display': 'grid',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '10px',
                        'margin': '0 0 0 10px'
                    }}>
                        <ProductItems productItems={frequentlyBoughtTogether} styles={productDescriptionStyles} />
                    </div>
                </Head>
            {size.width >= 992 ? <Footer /> : null}

            {size.width >= 992 ? null : <div className="mobileNavigation"><Navigation /></div>}
        </div>
    )
}
