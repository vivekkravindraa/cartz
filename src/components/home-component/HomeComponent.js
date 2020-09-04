import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import AutoCarouselOne from '../carousel-component/AutoCarouselOne/AutoCarouselOne';
import AutoCarouselTwo from '../carousel-component/AutoCarouselTwo/AutoCarouselTwo';
import AutoCarouselThree from '../carousel-component/AutoCarouselThree/AutoCarouselThree';
import AutoCarouselFour from '../carousel-component/AutoCarouselFour/AutoCarouselFour';

import Header from '../../common-components/Header/Header';
import Slider from '../../common-components/Slider/Slider';
import Footer from '../../common-components/Footer/Footer';
import Navigation from '../../common-components/Navigation/Navigation';

import Head from '../../building-blocks/molecules/Head/Head';
import Filter from '../../building-blocks/atoms/Filter/Filter';
import ProductItems from '../../building-blocks/molecules/Product/ProductItems';
import Label from '../../building-blocks/atoms/Label/Label';

import DailyEssentials from '../product-component/DailyEssentials/DailyEssentials';

import TemplateOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOne';
import TemplateOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOne';
import TemplateOneOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOneOne';

import {
    sectionOneBannerItems,
    sectionOneSubBannerItems,
    sectionTwoMainBannerItems as dailyEssentialBannerItems,
    sectionTwoBannerItems,
    sectionTwoSubBannerItems as fashionUpdateItems,
    sectionThreeBannerItems,
    sectionThreeFirstSubBannerItems,
    sectionThreeSecondSubBannerItems,
    sectionFourBannerItems,
    sectionFourSubBannerItems as yourEntertainmentItems,
    sectionFiveBannerItems,
    sectionFiveSubBannerItems,
    sectionFiveMobileSubBannerItems
} from '../../mocks/home-component-mocks/home-mocks';

import {
    todaysDealsHead,
    fashionUpdateHead,
    dailyEssentialsHead,
    offersOnFashionHead,
    yourEntertainmentHead,
    productOnOffersHead,
    smartphonesHead,
    smartHomesHead,
    smartProductsOnOffersHead,
    suggestedForYouHead
} from '../../building-blocks/molecules/Head/HeadItemsJsonData';

import {
    defaultHeadStyles,
    dailyEssentialsHeadStyles,
    smartHomesHeadStyles,
    customMobileHeadStyles
} from '../../building-blocks/molecules/Head/HeadStyles';

import {
    todaysDeals,
    productOnOffers,
    smartphones,
    smartProductsOnOffers,
    suggestedForYou,
    filteredProducts
} from '../../building-blocks/molecules/Product/ProductItemsJsonData';

import {
    defaultProductStyles
} from '../../building-blocks/molecules/Product/ProductStyles';

import {
    categoryFilters
} from '../../building-blocks/atoms/Filter/FilterItemsJsonData';

import {
    customFilterStyles
} from '../../building-blocks/atoms/Filter/FilterStyles';

import './HomeComponent.css';

export default function HomeComponent() {
    const size = useWindowSize();

    return (
        <div className="homeContainer">
            <div style={size.width >= 992 ? { background: '#ffffff' } : { background: '#F4F7FC' }}>
                <Header />
                <Slider />

                <div style={size.width >= 992 ? {
                    display: 'none'
                } : {
                    display: 'block'
                }}>
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
            </div>

            <div style={{ background: '#F4F7FC' }}>  
                <div style={size.width >= 992 ? {
                        marginTop: '100px', position: 'relative'
                    } : {}
                }>
                    <TemplateOneOneOne styles={
                        size.width >= 992 ? {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(3, 4fr)',
                            'columnGap': '10px',
                            'padding': '25px 80px 0px 80px',
                            'position': 'relative',
                            'top': '-80px'
                        } : {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(3, 4fr)',
                            'columnGap': '10px',
                            'padding': '10px'
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

                <div style={size.width >= 992 ? {
                    display: 'block'
                } : {
                    display: 'none'
                }}>
                    <TemplateOneOneOneOne styles={{
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(4, 3fr)',
                        'columnGap': '10px',
                        'padding': '25px 80px 0px 80px',
                        'position': 'relative',
                        'top': '-80px'
                    }}>
                        {sectionOneSubBannerItems.slice(0,4).map((bannerItem, index) => {
                            return <div key={index} style={{
                                'width': 'auto',
                                'background': `url(${bannerItem})`,
                                'backgroundSize': 'cover',
                                'borderRadius': '5px',
                                'height': `340px`
                            }}></div>
                        })}
                    </TemplateOneOneOneOne>
                </div>

                <div style={size.width >= 992 ? {
                    'display': 'block',
                    'position': 'relative',
                    'top': '-60px'
                } : {
                    'display': 'none'
                }}>
                    <Head data={todaysDealsHead} styles={defaultHeadStyles}>
                        <div className="todaysDealsScroll" id="todaysDealsScroll" style={{
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(1000, 200px)',
                            'columnGap': '20px',
                            'margin': '0 80px',
                            'padding': '25px 80px 0 0',
                            'gridAutoFlow': 'column',
                            'overflowX': 'auto',
                            'msOverflowStyle': 'none',
                            'scrollbarWidth': 'none' 
                        }}>
                            <ProductItems productItems={todaysDeals} styles={defaultProductStyles} />
                        </div>
                    </Head>
                </div>
            </div>

            <div style={{ background: '#F4F7FC' }}>
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
                            <ProductItems productItems={suggestedForYou} styles={defaultProductStyles} />
                        </div>
                    </Head>
                </div>

                <div style={size.width >= 992 ? {
                    display: 'block'
                } : {
                    display: 'none'
                }}>
                    <div style={{ background: 'transparent linear-gradient(180deg, #28B554 0%, #28B55400 100%) 0% 0% no-repeat padding-box', 'paddingTop': '25px' }}>
                        <Head data={dailyEssentialsHead} styles={dailyEssentialsHeadStyles} />
                        <div style={{
                            'background': 'transparent linear-gradient(180deg, #FFFFFF 0%, #F6F8FC 80%, #F4F7FC00 100%) 0% 0% no-repeat padding-box',
                            'borderRadius': '5px',
                            'opacity': '1',
                            'margin': '0px 80px'
                        }}>
                            <DailyEssentials bannerItems={dailyEssentialBannerItems} />
                        </div>
                    </div>
                </div>

                <div style={size.width >= 992 ? {
                    display: 'none'
                } : {
                    display: 'block'
                }}>
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
                </div>

                {size.width >= 992 ? 
                <TemplateOneOneOne styles={{
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
                            'borderRadius': '10px',
                            'height': `240px`
                        }}>
                        </div>
                    })}
                </TemplateOneOneOne>
                :
                <AutoCarouselOne bannerItems={sectionTwoBannerItems} />}
            </div>

            <div style={{ background: '#F4F7FC', 'paddingBottom': '100px' }}>
                {size.width >= 992 ? <Head data={fashionUpdateHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="fashionUpdateScroll" id="fashionUpdateScroll" style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(1000, 260px)',
                        'columnGap': '10px',
                        'margin': '0 80px',
                        'padding': '25px 80px 50px 0',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'msOverflowStyle': 'none',
                        'scrollbarWidth': 'none'
                    } : {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(2, 6fr)',
                        'columnGap': '10px',
                        'padding': '10px'
                    }}>
                        {fashionUpdateItems.map((bannerItem, index) => {
                            return <div key={index} style={{
                                'display': 'flex',
                                'flexDirection': 'column'
                            }} id={`fashionUpdateItem${index+1}`}>
                                <div style={{
                                    'width': 'auto',
                                    'backgroundImage': `url(${bannerItem.imageSource})`,
                                    'backgroundSize': 'cover',
                                    'backgroundPosition': 'center',
                                    'backgroundRepeat': 'no-repeat',
                                    'borderRadius': '5px',
                                    'height': `200px`
                                }}></div>
                                <Label label={bannerItem.label} styles={{
                                    'textAlign': 'center',
                                    'fontWeight': '600',
                                    'fontSize': '14px'
                                }}/>
                            </div>
                        })}
                    </div>
                </Head> : null}

                {size.width >= 992 ?
                    <TemplateOneOneOne styles={{
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(3, 4fr)',
                        'columnGap': '10px',
                        'padding': '25px 80px'
                    }}>
                        {sectionThreeBannerItems.slice(0,3).map((bannerItem, index) => {
                            return <div key={index} style={{
                                'width': 'auto',
                                'background': `url(${bannerItem})`,
                                'backgroundSize': 'cover',
                                'borderRadius': '10px',
                                'height': `240px`
                            }}></div>
                        })}
                    </TemplateOneOneOne>
                : null}
                
                <Head data={offersOnFashionHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="offersOnFashionScroll" style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(100, 250px)',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '10px',
                        'padding': '25px 80px 0 0',
                        'margin': '0 80px',
                        'msOverflowStyle': 'none',
                        'scrollbarWidth': 'none'
                    } : {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(4, 150px)',
                        'gridAutoFlow': 'column',
                        'columnGap': '10px',
                        'margin': '0 10px',
                        'overflowX': 'auto'
                    }}>
                        {sectionThreeFirstSubBannerItems.map((bannerItem, index) => {
                            return <div key={index} style={{
                                'width': 'auto',
                                'backgroundImage': `url(${bannerItem})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center',
                                'backgroundRepeat': 'no-repeat',
                                'borderRadius' : '10px',
                                'height': `${size.width >= 992 ? '260px' : '160px'}`
                            }}></div>
                        })}
                    </div>
                </Head>
                
                {size.width >= 992 ?
                    <Head data={yourEntertainmentHead} styles={defaultHeadStyles}>
                        <div className="yourEntertainmentScroll" id="yourEntertainmentScroll" style={{
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(1000, 250px)',
                            'gridAutoFlow': 'column',
                            'overflowX': 'auto',
                            'columnGap': '20px',
                            'padding': '25px 0',
                            'margin': '0 80px',
                            'msOverflowStyle': 'none',
                            'scrollbarWidth': 'none'
                        }}>
                            {sectionThreeSecondSubBannerItems.map((bannerItem, index) => {
                                return <div key={index} style={{
                                    'width': 'auto',
                                    'background': `url(${bannerItem})`,
                                    'backgroundSize': 'cover',
                                    'borderRadius': '10px',
                                    'height': `350px`
                                }}></div>
                            })}
                        </div>
                    </Head>
                :  null}

                {size.width >= 992 ? null : <AutoCarouselTwo bannerItems={sectionThreeBannerItems} />}
                
                {size.width >= 992 ?
                    <TemplateOneOneOne styles={{
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(3, 4fr)',
                        'columnGap': '10px',
                        'padding': '25px 80px'
                    }}>
                        {sectionFourBannerItems.slice(0,3).map((bannerItem, index) => {
                            return <div key={index} style={{
                                'width': 'auto',
                                'background': `url(${bannerItem})`,
                                'backgroundSize': 'cover',
                                'borderRadius': '10px',
                                'height': `240px`
                            }}></div>
                        })}
                    </TemplateOneOneOne>
                : <AutoCarouselThree bannerItems={sectionFourBannerItems} />}
                
                <Head data={productOnOffersHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="productOnOffersScroll" id="productOnOffersScroll" style={size.width >= 992 ? {
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
                        <ProductItems productItems={productOnOffers} styles={defaultProductStyles} />
                    </div>
                </Head>

                <Head data={yourEntertainmentHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="yourEntertainmentScroll2" id="yourEntertainmentScroll2" style={size.width >= 992 ? {
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
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(1000, 80px)',
                        'gridAutoFlow': 'column',
                        'overflowX': 'auto',
                        'columnGap': '20px',
                        'msOverflowStyle': 'none',
                        'scrollbarWidth': 'none'
                    }}>
                        {yourEntertainmentItems.map((bannerItem, index) => {
                            return <div key={index}>
                                <div style={{
                                    'width': 'auto',
                                    'backgroundImage': `url(${bannerItem.imageSource})`,
                                    'backgroundSize': 'contain',
                                    'backgroundPosition': 'center',
                                    'backgroundRepeat': 'no-repeat',
                                    'height': `${size.width >= 992 ? '180px' : '80px'}`
                                }}>
                                </div>
                                <Label label={bannerItem.label} styles={{
                                    'textAlign': 'center',
                                    'fontWeight': '600',
                                    'fontSize': '14px'
                                }} />
                            </div>
                        })}
                    </div>
                </Head>
                
                {size.width >= 992 ?
                <TemplateOneOneOne styles={{
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '5px',
                    'padding': '25px 80px'
                }}>
                    {sectionFiveBannerItems.slice(0,3).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'borderRadius': '10px',
                            'height': `240px`
                        }}></div>
                    })}
                </TemplateOneOneOne>
                : null}
                
                <Head data={smartphonesHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="smartphonesScroll" id="smartphonesScroll" style={size.width >= 992 ? {
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
                        <ProductItems productItems={smartphones} styles={defaultProductStyles} />
                    </div>
                </Head>

                {size.width >= 992 ? null : <AutoCarouselFour bannerItems={sectionThreeBannerItems} />}

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

                <Head data={smartProductsOnOffersHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                    <div className="smartProductsOnOffersScroll" id="smartProductsOnOffersScroll" style={size.width >= 992 ? {
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

                {size.width >= 992 ?
                    <Head data={suggestedForYouHead} styles={defaultHeadStyles}>
                        <div className="suggestedForYouScroll2" id="suggestedForYouScroll2" style={{
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
                            <ProductItems productItems={suggestedForYou} styles={defaultProductStyles} />
                        </div>
                    </Head>
                : null}

                {size.width >= 992 ? null : <React.Fragment>
                    <Filter filters={categoryFilters} filterStyles={customFilterStyles} />
                    <div style={{
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(2, 6fr)',
                        'columnGap': '10px',
                        'rowGap': '10px',
                        'padding': '10px'
                    }}>
                       <ProductItems productItems={filteredProducts} styles={defaultProductStyles} />
                    </div>
                </React.Fragment>}
            </div>

            {size.width >= 992 ? <Footer /> : null}

            {size.width >= 992 ? null :
            <div className="mobileNavigation">
                <Navigation />
            </div>}
        </div>
    )
}
