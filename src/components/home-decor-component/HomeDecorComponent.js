import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import Header from '../../common-components/Header/Header';
import Slider from '../../common-components/Slider/Slider';
import Footer from '../../common-components/Footer/Footer';
import Navigation from '../../common-components/Navigation/Navigation';

import Head from '../../building-blocks/molecules/Head/Head';
import ProductItems from '../../building-blocks/molecules/Product/ProductItems';

import TemplateOneOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOneOne';

import {
    sectionOneSubBannerItems
} from '../../mocks/home-component-mocks/home-mocks';

import {
    singleBannerItems,
    bestSellingEssentialItems
} from '../../mocks/essential-component-mocks/essential-mocks';

import {
    defaultProductStyles
} from '../../building-blocks/molecules/Product/ProductStyles';

import {
    bestSellingProductsHead,
    bestSellingEssentialHead
} from '../../building-blocks/molecules/Head/HeadItemsJsonData';

import {
    defaultHeadStyles,
    customMobileHeadStyles
} from '../../building-blocks/molecules/Head/HeadStyles';

export default function HomeDecorComponent() {
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

            <div style={size.width >= 992 ? {} : {}}>
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
                    {sectionOneSubBannerItems.slice(0,6).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `${size.width >= 992 ? '340px' : '240px'}`
                        }}></div>
                    })}
                </TemplateOneOneOneOne>
            </div>

            {size.width >= 992 ? null : <div style={{
                'display': 'grid',
                'margin': '10px'
            }}>
                <img src={singleBannerItems[0]} alt="noImage" width="100%" />
            </div>}

            <Head data={bestSellingEssentialHead} styles={size.width >= 992 ? defaultHeadStyles: customMobileHeadStyles}>
                <div className="bestSellingEssentialScroll3" id="bestSellingEssentialScroll3" style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(1000, 200px)',
                    'gridAutoFlow': 'column',
                    'columnGap': '20px',
                    'overflowX': 'auto',
                    'margin': '0 80px',
                    'padding': '25px 0',
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

            <div style={size.width >= 992 ? {} : {}}>
                <Head data={bestSellingProductsHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles} />
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
                    {sectionOneSubBannerItems.slice(0,6).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `${size.width >= 992 ? '340px' : '240px'}`
                        }}></div>
                    })}
                </TemplateOneOneOneOne>
            </div>

            <Head data={bestSellingEssentialHead} styles={size.width >= 992 ? defaultHeadStyles: customMobileHeadStyles}>
                <div className="bestSellingEssentialScroll4" id="bestSellingEssentialScroll4" style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(1000, 200px)',
                    'gridAutoFlow': 'column',
                    'columnGap': '20px',
                    'overflowX': 'auto',
                    'margin': '0 80px',
                    'padding': '25px 0',
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

            <Head data={bestSellingEssentialHead} styles={size.width >= 992 ? defaultHeadStyles: customMobileHeadStyles} />
            <div style={size.width >= 992 ? {} : {}}>
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
                    {sectionOneSubBannerItems.slice(0,6).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `${size.width >= 992 ? '340px' : '240px'}`
                        }}></div>
                    })}
                </TemplateOneOneOneOne>
            </div>

            <Head data={bestSellingEssentialHead} styles={size.width >= 992 ? defaultHeadStyles: customMobileHeadStyles}>
                <div className="bestSellingEssentialScroll5" id="bestSellingEssentialScroll5" style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(1000, 200px)',
                    'gridAutoFlow': 'column',
                    'columnGap': '20px',
                    'overflowX': 'auto',
                    'margin': '0 80px',
                    'padding': '25px 0',
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

            <Head data={bestSellingEssentialHead} styles={size.width >= 992 ? defaultHeadStyles: customMobileHeadStyles} />
            <div style={size.width >= 992 ? {} : {}}>
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
                    {sectionOneSubBannerItems.slice(0,6).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `${size.width >= 992 ? '340px' : '240px'}`
                        }}></div>
                    })}
                </TemplateOneOneOneOne>
            </div>

            <Head data={bestSellingEssentialHead} styles={size.width >= 992 ? defaultHeadStyles: customMobileHeadStyles}>
                <div className="bestSellingEssentialScroll6" id="bestSellingEssentialScroll6" style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(1000, 200px)',
                    'gridAutoFlow': 'column',
                    'columnGap': '20px',
                    'overflowX': 'auto',
                    'margin': '0 80px',
                    'padding': '25px 0',
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
                'margin': '10px 10px 75px 10px'
            }}>
                <img src={singleBannerItems[0]} alt="noImage" width="100%" />
            </div>}

            {size.width >= 992 ? <Footer /> : null}

            {size.width >= 992 ? null :
            <div className="mobileNavigation">
                <Navigation />
            </div>}
        </div>
    )
}
