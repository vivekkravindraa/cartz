import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import Header from '../../common-components/Header/Header';
import Slider from '../../common-components/Slider/Slider';
import Footer from '../../common-components/Footer/Footer';
import Navigation from '../../common-components/Navigation/Navigation';

import Head from '../../building-blocks/molecules/Head/Head';
import Filter from '../../building-blocks/atoms/Filter/Filter';
import ProductItems from '../../building-blocks/molecules/Product/ProductItems';
import Label from '../../building-blocks/atoms/Label/Label';

import TemplateOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOne';
import TemplateOneOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOneOne';

import {
    sectionOneBannerItems,
    sectionThreeSecondSubBannerItems
} from '../../mocks/home-component-mocks/home-mocks';

import {
    singleBannerItems
} from '../../mocks/essential-component-mocks/essential-mocks';

import {
    popularCategories
} from '../../mocks/fashion-component-mocks/fashion-mocks';

import {
    suggestedForYou,
    bestSellingProducts,
    smartProductsOnOffers,
    premiumSmartphones
} from '../../building-blocks/molecules/Product/ProductItemsJsonData';

import {
    defaultProductStyles,
    customProductStyles,
    absoluteTopImageProductStyles,
    absoluteLeftImageProductStyles
} from '../../building-blocks/molecules/Product/ProductStyles';

import {
    suggestedForYouHead,
    popularCategoriesHead,
    bestSellingProductsHead,
    yourEntertainmentHead,
    smartProductsOnOffersHead,
    premiumSmartphonesHead,
    budgetSmartphonesHead,
    bestOfTheYearHead
} from '../../building-blocks/molecules/Head/HeadItemsJsonData';

import {
    customMobileHeadStyles,
    customHeadStyles,
    defaultHeadStyles
} from '../../building-blocks/molecules/Head/HeadStyles';

import {
    productFilters
} from '../../building-blocks/atoms/Filter/FilterItemsJsonData';

import {
    defaultFilterStyles,
    customFilterStyles
} from '../../building-blocks/atoms/Filter/FilterStyles';

export default function MobileComponent() {
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

            {size.width >= 992 ? null : <div style={{
                'display': 'grid',
                'margin': '10px'
            }}>
                <img src={singleBannerItems[0]} alt="noImage" width="100%" />
            </div>}

            <div style={size.width >= 992 ? {} : {}}>
                <Head data={suggestedForYouHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="suggestedForYouScroll4" id="suggestedForYouScroll4" style={size.width >= 992 ? {
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

            <div style={size.width >= 992 ? {} : {}}>
                <TemplateOneOneOne styles={
                    size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(3, 4fr)',
                        'columnGap': '10px',
                        'padding': '25px 80px 0px 80px',
                    } : {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(1000, 250px)',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '10px',
                        'margin': '10px'
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
                                'height': `200px`
                            }
                        }>
                        </div>
                    })}
                </TemplateOneOneOne>
            </div>

            <Head data={popularCategoriesHead} styles={size.width >= 992 ? customHeadStyles : customMobileHeadStyles} />
            <div style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(4, 3fr)',
                    'placeItems': 'center',
                    'columnGap': '10px',
                    'rowGap': '10px',
                    'padding': '25px 80px'
                } : {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'placeItems': 'center',
                    'columnGap': '10px',
                    'rowGap': '10px',
                    'padding': '10px'
                }}>
                {popularCategories.slice(0,8).map((category, index) => {
                    return <div key={index}>
                        <img
                            src={category.imageSource} alt="noImage"
                            height={size.width >= 992 ? '240px' : '80px'}
                            style={{ 'borderRadius': '50%' }}
                        />
                        <Label label={category.label} styles={{
                            'textAlign': 'center',
                            'color': '#00243E',
                            'fontWeight': '600'
                        }}></Label>
                    </div>
                })}
            </div>

            {/* Premium Smartphones */}
            <Head data={premiumSmartphonesHead} styles={size.width >= 992 ? customHeadStyles : customMobileHeadStyles}>
                <div className="premiumSmartphonesScroll" id="premiumSmartphonesScroll" style={size.width >= 992 ? {
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
                    <ProductItems productItems={premiumSmartphones} styles={absoluteTopImageProductStyles} />
                </div>
            </Head>

            <div style={size.width >= 992 ? {} : {}}>
                <Head
                    data={bestSellingProductsHead}
                    styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}
                >
                    {size.width >= 992 ?
                        <Filter
                            filters={productFilters}
                            filterStyles={size.width >= 992 ? defaultFilterStyles : customFilterStyles}
                            filterHandle={(e) => console.log(e)}
                        >
                        </Filter>
                    : null}
                    <div className="bestSellingScroll" id="bestSellingScroll" style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(1000, 20%)',
                        'gridAutoFlow': 'column',
                        'columnGap': '10px',
                        'overflowX': 'auto',
                        'margin': '0 80px',
                        'padding': '25px 0',
                        'msOverflowStyle': 'none',
                        'scrollbarWidth': 'none'
                    } : {
                        'display': 'flex',
                        'overflowX': 'auto',
                        'margin': '0 0 0 10px',
                        'gap': '10px'
                    }}>
                        <ProductItems productItems={bestSellingProducts} styles={customProductStyles} />
                    </div>
                </Head>
            </div>

            {/* Best Of The Year */}
            <Head data={bestOfTheYearHead} styles={size.width >= 992 ? customHeadStyles : customMobileHeadStyles}>
                <div className="premiumSmartphonesScroll" id="premiumSmartphonesScroll" style={size.width >= 992 ? {
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
                    <ProductItems productItems={premiumSmartphones} styles={absoluteLeftImageProductStyles} />
                </div>
            </Head>

            {size.width >= 992 ? null : <div style={{
                'display': 'grid',
                'margin': '10px'
            }}>
                <img src={singleBannerItems[0]} alt="noImage" width="100%" />
            </div>}

            {/* Budget Smartphones */}
            <Head data={budgetSmartphonesHead} styles={size.width >= 992 ? customHeadStyles : customMobileHeadStyles}>
                <div className="premiumSmartphonesScroll" id="premiumSmartphonesScroll" style={size.width >= 992 ? {
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
                    <ProductItems productItems={premiumSmartphones} styles={absoluteTopImageProductStyles} />
                </div>
            </Head>
        
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

            <Head data={smartProductsOnOffersHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                <div className="smartProductsOnOffersScroll3" id="smartProductsOnOffersScroll3" style={size.width >= 992 ? {
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
                    <ProductItems productItems={smartProductsOnOffers} styles={defaultProductStyles} />
                </div>
            </Head>

            {size.width >= 992 ? <Footer /> : null}

            {size.width >= 992 ? null :
            <div className="mobileNavigation">
                <Navigation />
            </div>}
        </div>
    )
}
