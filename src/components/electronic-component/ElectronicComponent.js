import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import AutoCarouselOne from '../carousel-component/AutoCarouselOne/AutoCarouselOne';

import Header from '../../common-components/Header/Header';
import Slider from '../../common-components/Slider/Slider';
import Footer from '../../common-components/Footer/Footer';
import Navigation from '../../common-components/Navigation/Navigation';

import Head from '../../building-blocks/molecules/Head/Head';
import ProductItems from '../../building-blocks/molecules/Product/ProductItems';
import Label from '../../building-blocks/atoms/Label/Label';

import {
    sectionOneBannerItems,
    sectionTwoMainBannerItems as dailyEssentialBannerItems,
    sectionThreeSecondSubBannerItems,
    sectionFiveSubBannerItems,
    sectionFiveMobileSubBannerItems
} from '../../mocks/home-component-mocks/home-mocks';

import {
    singleBannerItems
} from '../../mocks/essential-component-mocks/essential-mocks';

import {
    dailyEssentialsHead,
    suggestedForYouHead,
    yourEntertainmentHead,
    productOnOffersHead,
    smartphonesHead,
    smartHomesHead,
    smartProductsOnOffersHead
} from '../../building-blocks/molecules/Head/HeadItemsJsonData';

import {
    defaultHeadStyles,
    customMobileHeadStyles,
    smartHomesHeadStyles
} from '../../building-blocks/molecules/Head/HeadStyles';

import {
    suggestedForYou,
    productOnOffers,
    smartphones,
    smartProductsOnOffers
} from '../../building-blocks/molecules/Product/ProductItemsJsonData';

import {
    defaultProductStyles
} from '../../building-blocks/molecules/Product/ProductStyles';

import TemplateOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOne';
import TemplateOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOne';
import TemplateOneOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOneOne';

export default function ElectronicComponent() {
    const size = useWindowSize();

    return (
        <div>
            <Header />

            {size.width >= 992 ? null : <div style={{
                'display': 'grid',
                'margin': '10px'
            }}>
                <img src={singleBannerItems[0]} alt="noImage" width="100%" />
            </div>}

            <Slider />

            <div style={size.width >= 992 ? { 'backgroundColor': 'f4f7fc' } : {}}>
                {size.width >= 992 ? null : <div style={{ 'marginTop': '10px' }}>
                    <AutoCarouselOne bannerItems={sectionOneBannerItems} />
                </div>}

                <div style={size.width >= 992 ? {} : {}}>
                    <TemplateOneOne styles={
                        size.width >= 992 ? {} : {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(2, 6fr)',
                            'columnGap': '10px',
                            'padding': '10px'
                        }
                    }>
                        {sectionOneBannerItems.slice(0,2).map((bannerItem, index) => {
                            return <div key={index} style={
                                size.width >= 992 ? {} : {
                                    'width': 'auto',
                                    'background': `url(${bannerItem})`,
                                    'backgroundSize': 'cover',
                                    'backgroundPosition': 'center',
                                    'backgroundRepeat': 'no-repeat',
                                    'borderRadius': '5px',
                                    'height': `150px`
                                }
                            }>
                            </div>
                        })}
                    </TemplateOneOne>
                </div>

                <div style={size.width >= 992 ? {} : {}}>
                    <TemplateOneOneOne styles={
                        size.width >= 992 ? {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(3, 4fr)',
                            'columnGap': '10px',
                            'padding': '25px 80px 0px 80px'
                        } : {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(3, 4fr)',
                            'columnGap': '10px',
                            'padding': '0 10px 10px 10px'
                        }
                    }>
                        {sectionOneBannerItems.slice(0,3).map((bannerItem, index) => {
                            return <div key={index} style={size.width >= 992 ? {
                                    'width': 'auto',
                                    'backgroundImage': `url(${bannerItem})`,
                                    'backgroundSize': 'cover',
                                    'backgroundPosition': 'center',
                                    'backgroundRepeat': 'no-repeat',
                                    'borderRadius': '5px',
                                    'height': `235px`
                                } : {
                                    'width': 'auto',
                                    'backgroundImage': `url(${bannerItem})`,
                                    'backgroundSize': 'cover',
                                    'backgroundPosition': 'center',
                                    'backgroundRepeat': 'no-repeat',
                                    'borderRadius': '5px',
                                    'height': `100px`
                                }
                            }>
                            </div>
                        })}
                    </TemplateOneOneOne>
                </div>
            
                {size.width >= 992 ? null :
                <div>
                    <Head data={dailyEssentialsHead} styles={customMobileHeadStyles} />
                    <div style={{
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(3, 4fr)',
                        'columnGap': '10px',
                        'rowGap': '10px',
                        'padding': '10px'
                    }}>
                        {dailyEssentialBannerItems.slice(0, 8).map((bannerItem, index) => {
                            return <div key={index}style={{
                                'display': 'flex',
                                'flexDirection': 'column',
                                'justifyContent': 'center',
                                'background': '#ffffff',
                                'padding': '15px 1px',
                                'borderRadius': '5px',
                                'height': '100px',
                                'minWidth': '90px'
                            }}>
                                <img src={bannerItem.imageSource} alt="noImage" height="70" />
                                <Label label={bannerItem.label} styles={{
                                    'textAlign': 'center',
                                    'fontWeight': 'bold',
                                    'fontSize': '10px'
                                }}></Label>
                            </div>
                        })}
                    </div>
                </div>}

                {size.width >= 992 ? null : <div style={{ 'marginTop': '10px' }}>
                    <AutoCarouselOne bannerItems={sectionOneBannerItems} />
                </div>}

                <div style={size.width >= 992 ? {} : {}}>
                    <Head data={suggestedForYouHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                        <div className="suggestedForYouScroll3" id="suggestedForYouScroll3" style={size.width >= 992 ? {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(1000, 200px)',
                            'gridAutoFlow': 'column',
                            'overflowX': 'auto',
                            'columnGap': '20px',
                            'margin': '0 80px',
                            'padding': '25px 0',
                            'msOverflowStyle': 'none',
                            'scrollbarWidth': 'none'
                        } : {
                            'display': 'flex',
                            'overflowX': 'auto',
                            'margin': '0 10px',
                            'gap': '10px'
                        }}>
                            <ProductItems productItems={suggestedForYou} styles={defaultProductStyles} />
                        </div>
                    </Head>
                </div>

                {size.width >= 992 ? null :
                <React.Fragment>
                    <Head data={yourEntertainmentHead} styles={customMobileHeadStyles} />
                    <TemplateOneOneOneOne styles={{
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(2, 6fr)',
                        'columnGap': '10px',
                        'rowGap': '10px',
                        'padding': '10px'
                    }}>
                        {sectionThreeSecondSubBannerItems.slice(0,4).map((bannerItem, index) => {
                            return <div key={index} style={{
                                'width': 'auto',
                                'background': `url(${bannerItem})`,
                                'backgroundSize': 'cover',
                                'borderRadius': '10px',
                                'height': `150px`
                            }}></div>
                        })}
                    </TemplateOneOneOneOne>
                </React.Fragment>}

                <Head data={productOnOffersHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="productOnOffersScroll2" id="productOnOffersScroll2" style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(1000, 200px)',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '10px',
                        'margin': '0 80px',
                        'padding': '25px 0',
                        'msOverflowStyle': 'none',
                        'scrollbarWidth': 'none'
                    } : {
                        'display': 'flex',
                        'overflowX': 'auto',
                        'margin': '0 10px',
                        'gap': '10px'
                    }}>
                        <ProductItems productItems={productOnOffers} styles={defaultProductStyles} />
                    </div>
                </Head>

                {size.width >= 992 ? null : <div style={{
                    'display': 'grid',
                    'margin': '10px'
                }}>
                    <img src={singleBannerItems[0]} alt="noImage" width="100%" />
                </div>}

                <Head data={smartphonesHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles} />
                <div className="smartphonesScroll2" id="smartphonesScroll2" style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(1000, 200px)',
                    'gridAutoFlow': 'column',
                    'overflowX': 'auto',
                    'columnGap': '20px',
                    'margin': '0 80px',
                    'padding': '25px 0',
                    'msOverflowStyle': 'none',
                    'scrollbarWidth': 'none'
                } : {
                    'display': 'flex',
                    'overflowX': 'auto',
                    'margin': '0 10px',
                    'gap': '10px'
                }}>
                    <ProductItems productItems={smartphones} styles={defaultProductStyles} />
                </div>
            
                <Head data={smartHomesHead} styles={size.width >= 992 ? smartHomesHeadStyles : customMobileHeadStyles} />
                <TemplateOneOneOneOne styles={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'auto auto auto auto',
                    'padding': '25px 80px'
                } : {
                    'display': 'grid',
                    'gridTemplateColumns': 'auto auto auto',
                    'padding': '10px'
                }}>
                    {(size.width >= 992 ? sectionFiveSubBannerItems.slice(0,4) : sectionFiveMobileSubBannerItems.slice(0,3)).map((bannerItem, index) => {
                        return <div key={index} style={bannerItem.styles}></div>
                    })}
                </TemplateOneOneOneOne>

                <Head data={smartProductsOnOffersHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles} />
                <div className="smartProductsOnOffersScroll2" id="smartProductsOnOffersScroll2" style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(1000, 200px)',
                    'gridAutoFlow': 'column',
                    'overflowX': 'auto',
                    'columnGap': '20px',
                    'margin': '0 80px',
                    'padding': '25px 0',
                    'msOverflowStyle': 'none',
                    'scrollbarWidth': 'none'
                } : {
                    'display': 'flex',
                    'overflowX': 'auto',
                    'margin': '0 10px 75px 10px',
                    'gap': '10px'
                }}>
                    <ProductItems productItems={smartProductsOnOffers} styles={defaultProductStyles} />
                </div>
            </div>

            {size.width >= 992 ? <Footer /> : null}
            
            {size.width >= 992 ? null :
            <div className="mobileNavigation">
                <Navigation />
            </div>}
        </div>
    )
}
