import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import AutoCarouselOne from '../carousel-component/AutoCarouselOne/AutoCarouselOne';

import Header from '../../common-components/Header/Header';
import Slider from '../../common-components/Slider/Slider';
import Footer from '../../common-components/Footer/Footer';
import Navigation from '../../common-components/Navigation/Navigation';

import Head from '../../building-blocks/molecules/Head/Head';
import Label from '../../building-blocks/atoms/Label/Label';
import ProductItems from '../../building-blocks/molecules/Product/ProductItems';

import DailyEssentials from '../product-component/DailyEssentials/DailyEssentials';

import TemplateOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOne';
import TemplateOneOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOneOne';

import {
    sectionTwoBannerItems,
    sectionTwoMainBannerItems as dailyEssentialBannerItems,
    sectionThreeSecondSubBannerItems
} from '../../mocks/home-component-mocks/home-mocks';

import {
    bestSellingEssentialItems,
    suggestedForYouItems,
    singleBannerItems,
    summerDrinksItems,
    comboDealsItems,
    topDealsItems,
} from '../../mocks/essential-component-mocks/essential-mocks';

import {
    dailyEssentialsHead,
    bestSellingEssentialHead,
    suggestedForYouHead,
    summerDrinksHead,
    comboDealsHead,
    topDealsHead
} from '../../building-blocks/molecules/Head/HeadItemsJsonData';

import {
    defaultHeadStyles,
    customMobileHeadStyles,
} from '../../building-blocks/molecules/Head/HeadStyles';

import {
    defaultProductStyles
} from '../../building-blocks/molecules/Product/ProductStyles';

export default function EssentialComponent() {
    const size = useWindowSize();

    return (
        <div className="essentialContainer" style={size.width >= 992 ? { background: '#ffffff' } : { background: '#F4F7FC' }}>
            <Header />
            <Slider />

            <div style={{ background: '#F4F7FC', 'paddingBottom': '100px' }}>
                {size.width >= 992 ? <TemplateOneOneOne styles={{
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                }}>
                    {sectionTwoBannerItems.slice(0, 3).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `240px`
                        }}>
                        </div>
                    })}
                </TemplateOneOneOne> : null}

                {size.width >= 992 ? 
                <React.Fragment>
                    <Head data={dailyEssentialsHead} styles={defaultHeadStyles} />
                    <div style={{
                        'background': 'transparent linear-gradient(180deg, #FFFFFF 0%, #F6F8FC 80%, #F4F7FC00 100%) 0% 0% no-repeat padding-box',
                        'borderRadius': '5px',
                        'opacity': '1',
                        'margin': '25px 80px 0px 80px'
                    }}>
                    <DailyEssentials bannerItems={dailyEssentialBannerItems} />
                    </div>
                </React.Fragment> : null}

                <div style={size.width >= 992 ? {
                    display: 'none'
                } : {
                    display: 'block'
                }}>
                    <Head data={dailyEssentialsHead} styles={customMobileHeadStyles}>
                        <div className="dailyEssentialsScroll" id="dailyEssentialsScroll" style={{
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
                    </Head>
                </div>

                <div style={size.width >= 992 ? {
                    display: 'none'
                } : {
                    display: 'block'
                }}>
                    <Head data={suggestedForYouHead} styles={customMobileHeadStyles}>
                        <div className="suggestedForYouScroll" id="suggestedForYouScroll" style={{
                            'display': 'flex',
                            'overflowX': 'auto',
                            'margin': '0 10px',
                            'gap': '10px'
                        }}>
                            <ProductItems productItems={suggestedForYouItems} styles={defaultProductStyles} />
                        </div>
                    </Head>
                </div>

                <Head data={bestSellingEssentialHead} styles={size.width >= 992 ? defaultHeadStyles: customMobileHeadStyles}>
                    <div className="bestSellingEssentialScroll" id="bestSellingEssentialScroll" style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(1000, 200px)',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '20px',
                        'padding': '25px 0',
                        'margin': '0 80px',
                        'msOverflowStyle': 'none',
                        'scrollbarWidth': 'none'
                    } : {
                        'display': 'flex',
                        'overflowX': 'auto',
                        'gap': '10px',
                        'margin': '0 10px'
                    }}>
                        <ProductItems productItems={bestSellingEssentialItems} styles={defaultProductStyles} />
                    </div>
                </Head>

                {size.width >= 992 ? null : <div style={{
                    'display': 'grid',
                    'margin': '10px'
                }}>
                    <img src={singleBannerItems[0]} alt="noImage" width="100%" />
                </div>}

                {size.width >= 992 ? <TemplateOneOneOneOne styles={{
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(4, 3fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                }}>
                    {sectionThreeSecondSubBannerItems.slice(0,4).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `350px`
                        }}>
                        </div>
                    })}
                </TemplateOneOneOneOne> : null}

                {size.width >= 992 ?
                    <Head data={bestSellingEssentialHead} styles={defaultHeadStyles}>
                        <div className="bestSellingEssentialScroll2" id="bestSellingEssentialScroll2" style={{
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(1000, 200px)',
                            'gridAutoFlow': 'column',
                            'overflowX': 'auto',
                            'columnGap': '20px',
                            'padding': '25px 0',
                            'margin': '0 80px',
                            'msOverflowStyle': 'none',
                            'scrollbarWidth': 'none'
                        }}>
                            <ProductItems productItems={bestSellingEssentialItems} styles={defaultProductStyles} />
                        </div>
                    </Head>
                : null}

                <Head data={summerDrinksHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles} />
                <TemplateOneOneOneOne styles={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(4, 3fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                } : {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '10px',
                    'padding': '10px'
                }}>
                    {summerDrinksItems.slice(0,size.width >= 992 ? 4 : 3).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'display': 'flex',
                            'flexDirection': 'column'
                        }}>
                            <div key={index} style={{
                                'width': 'auto',
                                'background': `url(${bannerItem.imageSource})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center',
                                'backgroundRepeat': 'no-repeat',
                                'borderRadius': '5px',
                                'height': `${size.width >= 992 ? '210px' : '110px'}`
                            }}>
                            </div>
                            <Label label={bannerItem.label} styles={{
                                'textAlign': 'center',
                                'fontWeight': '600',
                                'fontSize': '14px'
                            }} />
                        </div>
                    })}
                </TemplateOneOneOneOne>

                <Head data={comboDealsHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="comboDealsScroll" id="comboDealsScroll" style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(1000, 200px)',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '20px',
                        'padding': '25px 0',
                        'margin': '0 80px',
                        'msOverflowStyle': 'none',
                        'scrollbarWidth': 'none'
                    } : {
                        'display': 'flex',
                        'overflowX': 'auto',
                        'margin': '0 10px',
                        'gap': '10px' 
                    }}>
                        <ProductItems productItems={comboDealsItems} styles={defaultProductStyles} />
                    </div>
                </Head>

                <TemplateOneOneOneOne styles={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(4, 3fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                } : {
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
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `${size.width >= 992 ? '350px' : '200px'}`
                        }}></div>
                    })}
                </TemplateOneOneOneOne>

                {/* Fruits and Vegetables */}
                {size.width >= 992 ? null :
                    <Head data={topDealsHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                        <div className="topDealsScroll" id="topDealsScroll" style={size.width >= 992 ? {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(5, 2fr)',
                            'columnGap': '20px',
                            'padding': '25px 80px'
                        } : {
                            'display': 'flex',
                            'overflowX': 'auto',
                            'margin': '0 10px',
                            'gap': '10px'
                        }}>
                            <ProductItems productItems={topDealsItems} styles={defaultProductStyles} />
                        </div>
                    </Head>
                }

                {/* Three Banners From Home */}
                {size.width >= 992 ? null : 
                <TemplateOneOneOne styles={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                } : {
                    'display': 'flex',
                    'overflowX': 'auto',
                    'margin': '10px',
                    'gap': '10px'
                }}>
                    {sectionTwoBannerItems.slice(0, 3).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'backgroundImage': `url(${bannerItem})`,
                            'backgroundSize': 'contain',
                            'backgroundPosition': 'center',
                            'borderRadius': '10px',
                            'height': `${size.width >= 992 ? '240px' : '220px'}`
                        }}>
                            <img src={bannerItem} alt="noImage" height="100%" />
                        </div>
                    })}
                </TemplateOneOneOne>}

                {/* Offer Products */}
                {size.width >= 992 ? null :
                <Head data={topDealsHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="topDealsScroll2" id="topDealsScroll2" style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(5, 2fr)',
                        'columnGap': '20px',
                        'padding': '25px 80px'
                    } : {
                        'display': 'flex',
                        'overflowX': 'auto',
                        'margin': '0 10px',
                        'gap': '10px'
                    }}>
                        <ProductItems productItems={topDealsItems} styles={defaultProductStyles} />
                    </div>
                </Head>}

                {size.width >= 992 ? null : <div style={{ marginTop: '10px' }}>
                    <AutoCarouselOne bannerItems={sectionTwoBannerItems} />
                </div>}

                {size.width >= 992 ? null : <TemplateOneOneOneOne styles={{
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '10px',
                    'rowGap': '10px',
                    'padding': '10px'
                }}>
                    {sectionThreeSecondSubBannerItems.slice(0,3).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `150px`
                        }}></div>
                    })}
                </TemplateOneOneOneOne>}

                <Head data={topDealsHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="topDealsScroll3" id="topDealsScroll3" style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(1000, 200px)',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '20px',
                        'padding': '25px 0',
                        'margin': '0 80px',
                        'msOverflowStyle': 'none',
                        'scrollbarWidth': 'none'
                    } : {
                        'display': 'flex',
                        'overflowX': 'auto',
                        'margin': '0 10px',
                        'gap': '10px'
                    }}>
                        <ProductItems productItems={topDealsItems} styles={defaultProductStyles} />
                    </div>
                </Head>
            </div>
            
            {size.width >= 992 ? <Footer /> : null}

            {size.width >= 992 ? null :
            <div className="mobileNavigation">
                <Navigation />
            </div>}
        </div>
    )
}
