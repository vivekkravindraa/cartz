import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import AutoCarouselTwo from '../carousel-component/AutoCarouselTwo/AutoCarouselTwo';

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
import TemplateOneOneOneOneOne from '../../building-blocks/organisms/Banner/banner-templates/templates/TemplateOneOneOneOneOne';

import {
    sectionThreeBannerItems,
    sectionTwoSubBannerItems as fashionUpdateItems,
    sectionThreeFirstSubBannerItems as exclusiveOffersItems,
} from '../../mocks/home-component-mocks/home-mocks';

import {
    singleBannerItems
} from '../../mocks/essential-component-mocks/essential-mocks';

import {
    fashionOffersItems,
    shoppingForItems,
    popularCategories,
    shopByBrandItems,
    dressBannerItems
} from '../../mocks/fashion-component-mocks/fashion-mocks';

import {
    bestSellingProducts,
    bestTrendingProducts,
    bestGymWears
} from '../../building-blocks/molecules/Product/ProductItemsJsonData';

import {
    customProductStyles
} from '../../building-blocks/molecules/Product/ProductStyles';

import {
    shoppingForHead,
    fashionUpdateHead,
    bestSellingProductsHead,
    exclusiveOffersHead,
    popularCategoriesHead,
    bestTrendingProductsHead,
    bestGymWearHead,
    shopByBrandHead
} from '../../building-blocks/molecules/Head/HeadItemsJsonData';

import {
    defaultHeadStyles,
    customHeadStyles,
    shopByBrandHeadStyles,
    customMobileHeadStyles
} from '../../building-blocks/molecules/Head/HeadStyles';

import {
    productFilters
} from '../../building-blocks/atoms/Filter/FilterItemsJsonData';

import {
    defaultFilterStyles,
    customFilterStyles
} from '../../building-blocks/atoms/Filter/FilterStyles';

export default function FashionComponent() {    
    const size = useWindowSize();
    const [ bestSelling, setBestSellingProducts ] = useState([]);

    useEffect(() => { setBestSellingProducts(bestSellingProducts); }, []);

    const filterBestSellingProducts = (e) => {
        let filterTargetValue = e.target.value;

        let filteredResults = bestSellingProducts.filter((product) => {
            return product.categoryName.toLowerCase() === filterTargetValue.toLowerCase() ? product : null;
        });
        setBestSellingProducts(filteredResults);
    };

    return (
        <div className="fashionContainer" style={size.width >= 992 ? { background: '#ffffff' } : { background : '#f4f7fc' }}>
            <Header />
            {size.width >= 992 ? null : <TemplateOneOneOneOneOne styles={{
                'display': 'flex',
                'overflowX': 'auto'
            }}>
                {shoppingForItems.slice(0,5).map((item,index) => {
                    return <div key={index} style={{
                        'display': 'flex',
                        'flexDirection': 'column',
                        'justifyContent': 'center',
                        'alignItems': 'center',
                        'margin': '10px'
                    }}>
                        <img src={item.imageSource} alt="noImage" height="80px" />
                        <Label label={item.label} styles={{
                            'textAlign': 'center',
                            'fontWeight': '600',
                            'fontSize': '14px'
                        }} />
                    </div>
                })}
            </TemplateOneOneOneOneOne>}
            <Slider />

            <div style={{ 'background': '#F4F7FC', 'paddingBottom': '100px' }}>
                <TemplateOneOneOne styles={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '25px',
                    'padding': '25px 80px'
                } : {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '10px',
                    'padding': '10px'

                }}>
                    {fashionOffersItems.slice(0,3).map((offer,index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'backgroundImage': `url(${offer.imageSource})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `${size.width >= 992 ? '350px' : '100px'}`
                        }}>
                        </div>
                    })}
                </TemplateOneOneOne>

                {size.width >= 992 ?
                <React.Fragment>
                    <Head data={shoppingForHead} styles={defaultHeadStyles} />
                    <TemplateOneOneOneOneOne styles={{
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(5, 20%)',
                        'padding': '25px 80px'
                    }}>
                        {shoppingForItems.slice(0,5).map((item,index) => {
                            return <div key={index}>
                                <div style={{
                                    'width': 'auto',
                                    'backgroundImage': `url(${item.imageSource})`,
                                    'backgroundSize': 'contain',
                                    'backgroundPosition': 'center',
                                    'backgroundRepeat': 'no-repeat',
                                    'height': '150px'
                                }}>
                                </div>
                                <Label label={item.label} styles={{
                                    'textAlign': 'center',
                                    'fontWeight': '600',
                                    'fontSize': '14px'
                                }} />
                            </div>
                        })}
                    </TemplateOneOneOneOneOne>
                </React.Fragment> : null}

                {size.width >= 992 ? null : <AutoCarouselTwo bannerItems={sectionThreeBannerItems} />}

                {size.width >= 992 ?
                <React.Fragment>
                    <Head data={shoppingForHead} styles={customHeadStyles} />
                    <TemplateOneOneOne styles={{
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(3, 4fr)',
                            'columnGap': '10px',
                            'padding': '25px 80px'
                        }}>
                        {sectionThreeBannerItems.slice(0,3).map((bannerItem, index) => {
                            return <div key={index} style={{
                                'background': `url(${bannerItem})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center',
                                'backgroundRepeat': 'no-repeat',
                                'borderRadius': '5px',
                                'height': '238px'
                            }}>
                            </div>
                        })}
                    </TemplateOneOneOne>
                </React.Fragment> : null}

                <div style={size.width >= 992 ? {} : {
                    display: 'flex'
                }}>
                    <Head
                        data={bestSellingProductsHead}
                        styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}
                    >
                        <Filter
                            filters={productFilters}
                            filterStyles={size.width >= 992 ? defaultFilterStyles : customFilterStyles}
                            filterHandle={(e) => filterBestSellingProducts(e)}
                        >
                        </Filter>
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
                        }}>
                            <ProductItems productItems={bestSelling} styles={customProductStyles} />
                        </div>
                    </Head>
                </div>

                {size.width >= 992 ? null : <div style={{
                    'display': 'grid',
                    'margin': '10px'
                }}>
                    <img src={singleBannerItems[0]} alt="noImage" width="100%" />
                </div>}

                {size.width >= 992 ? <TemplateOneOneOne styles={{
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                }}>
                    {sectionThreeBannerItems.slice(0,3).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': '238px'
                        }}>
                        </div>
                    })}
                </TemplateOneOneOne> : null}

                <div style={size.width >= 992 ? {} : {
                    'display': 'flex'
                }}>
                    <Head data={bestSellingProductsHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                        <Filter
                            filters={productFilters}
                            filterStyles={size.width >= 992 ? defaultFilterStyles : customFilterStyles}
                            filterHandle={(e) => {}}
                        />
                        <div className="bestSellingScroll2" id="bestSellingScroll2" style={size.width >= 992 ? {
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
                            'margin': '0 10px',
                            'gap': '10px'
                        }}>
                            <ProductItems productItems={bestSellingProducts} styles={customProductStyles} />
                        </div>
                    </Head>
                </div>

                <Head data={fashionUpdateHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles} />
                <TemplateOneOneOneOne styles={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(4, 3fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                } : {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(2, 6fr)',
                    'columnGap': '10px',
                    'padding': '10px'
                }}>
                    {fashionUpdateItems.slice(0,4).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'display': 'flex',
                            'flexDirection': 'column'
                        }} id={`fashionUpdateItem${index+1}`}>
                            <div style={{
                                'width': 'auto',
                                'background': `url(${bannerItem.imageSource})`,
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center',
                                'backgroundRepeat': 'no-repeat',
                                'borderRadius': '5px',
                                'height': `220px`
                            }}></div>
                            <Label label={bannerItem.label} styles={{
                                'textAlign': 'center',
                                'fontWeight': '600',
                                'fontSize': '14px'
                            }}/>
                        </div>
                    })}
                </TemplateOneOneOneOne>

                <Head data={exclusiveOffersHead} styles={size.width >= 992 ? customHeadStyles : customMobileHeadStyles} />
                <div style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(4, 3fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                } : {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(1000, 150px)',
                    'gridAutoFlow': 'column',
                    'columnGap': '10px',
                    'margin': '0 10px',
                    'overflowX': 'auto'
                }}>
                    {exclusiveOffersItems.slice(0,4).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'width': 'auto',
                            'backgroundImage': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': `${size.width >= 992 ? '200px' : '150px'}`
                        }}>
                        </div>
                    })}
                </div>

                <Head data={popularCategoriesHead} styles={size.width >= 992 ? customHeadStyles : customMobileHeadStyles} />
                <div style={size.width >= 992 ? {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(4, 3fr)',
                        'columnGap': '10px',
                        'rowGap': '10px',
                        'padding': '25px 80px'
                    } : {
                        'display': 'grid',
                        'gridTemplateColumns': 'repeat(3, 4fr)',
                        'columnGap': '10px',
                        'rowGap': '10px',
                        'padding': '10px'
                    }}>
                    {popularCategories.slice(0,8).map((category, index) => {
                        return <div key={index}>
                            <div style={{
                               'width': 'auto',
                               'backgroundImage': `url(${category.imageSource})`,
                               'backgroundSize': 'contain',
                               'backgroundPosition': 'center',
                               'backgroundRepeat': 'no-repeat',
                               'borderRadius': '50%',
                               'height': `${size.width >= 992 ? '240px' : '80px'}`
                            }}>
                            </div>
                            <Label label={category.label} styles={{
                                'textAlign': 'center',
                                'color': '#00243E',
                                'fontWeight': '600'
                            }}></Label>
                        </div>
                    })}
                </div>
                
                {size.width >= 992 ? null : <div style={{
                    'display': 'grid',
                    'margin': '10px'
                }}>
                    <img src={singleBannerItems[0]} alt="noImage" width="100%" />
                </div>}

                {size.width >= 992 ? <TemplateOneOneOne styles={{
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '10px',
                    'padding': '25px 80px'
                }}>
                    {sectionThreeBannerItems.slice(0,3).map((bannerItem, index) => {
                        return <div key={index} style={{
                            'background': `url(${bannerItem})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'backgroundRepeat': 'no-repeat',
                            'borderRadius': '5px',
                            'height': '240px'
                        }}>
                        </div>
                    })}
                </TemplateOneOneOne> : null}

                <div style={size.width >= 992 ? {} : {
                    'display': 'flex'
                }}>
                    <Head data={bestTrendingProductsHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                        <Filter filters={productFilters} filterStyles={size.width >= 992 ? defaultFilterStyles : customFilterStyles} />
                        <div className="bestTrendingProductsScroll" id="bestTrendingProductsScroll" style={size.width >= 992 ? {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(5, 20%)',
                            'columnGap': '10px',
                            'padding': '25px 80px'
                        } : {
                            'display': 'flex',
                            'overflowX': 'auto',
                            'margin': '0 10px',
                            'gap': '10px'
                        }}>
                            <ProductItems productItems={bestTrendingProducts} styles={customProductStyles} />
                        </div>
                    </Head>
                </div>

                {size.width >= 992 ? null : <div style={{
                    'display': 'grid',
                    'margin': '10px'
                }}>
                    <img src={singleBannerItems[0]} alt="noImage" width="100%" />
                </div>}

                <div style={size.width >= 992 ? {} : {
                    'display': 'flex'
                }}>
                    <Head data={bestGymWearHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                        <Filter
                            filters={productFilters}
                            filterStyles={size.width >= 992 ? defaultFilterStyles : customFilterStyles}
                            filterHandle={(e) => {}}
                        />
                        <div style={size.width >= 992 ? {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(5, 20%)',
                            'columnGap': '10px',
                            'padding': '25px 80px'
                        } : {
                            'display': 'flex',
                            'overflowX': 'auto',
                            'margin': '0 10px',
                            'gap': '10px'
                        }}>
                            <ProductItems productItems={bestGymWears} styles={customProductStyles} />
                        </div>
                    </Head>
                </div>

                <Head data={shopByBrandHead} styles={size.width >= 992 ? shopByBrandHeadStyles : customMobileHeadStyles} />
                <div style={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'auto auto auto auto auto',
                    'columnGap': '10px',
                    'padding': '25px 80px',
                } : {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(3, 4fr)',
                    'columnGap': '10px',
                    'rowGap': '10px',
                    'padding': '10px'
                }}>
                    {shopByBrandItems.slice(0,9).map((brand, index) => {
                        return <div key={index}>
                            <div style={size.width >= 992 ? {
                                'display': 'flex',
                                'justifyContent': 'center',
                                'alignItems': 'center',
                                'background': '#ffffff',
                                'padding': '25px 0',
                                'minWidth': '150px'
                            }: {
                                'display': 'flex',
                                'justifyContent': 'center',
                                'alignItems': 'center',
                                'background': '#ffffff',
                                'padding': '10px',
                                'height': '60px'
                            }}>
                                <img key={index} src={brand.imageSource} alt="noImage" height={size.width >= 992 ? '100px' : '40px'} />
                            </div>
                            <div style={{
                                'display': 'flex',
                                'justifyContent': 'center',
                                'alignItems': 'center',
                                'background': '#00243E 0% 0% no-repeat padding-box',
                                'borderRadius': '8px',
                                'padding': '2px'
                            }}>
                                <Label label={brand.offer} styles={{
                                    'textAlign': 'left',
                                    'fontWeight': '600',
                                    'fontSize': '12px',
                                    'fontFamily': 'Roboto, sans-serif',
                                    'letterSpacing': '0px',
                                    'color': '#F4F7FC',
                                    'textTransform': 'capitalize',
                                    'opacity': '1'
                                }}></Label>
                            </div>
                        </div>
                    })}
                </div>

                <TemplateOneOneOneOne styles={size.width >= 992 ? {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(4, 3fr)',
                    'columnGap': '25px',
                    'padding': '25px 80px',
                } : {
                    'display': 'grid',
                    'gridTemplateColumns': 'repeat(2, 6fr)',
                    'columnGap': '10px',
                    'rowGap': '10px',
                    'padding': '10px',
                }}>
                    {dressBannerItems.slice(0,4).map((dress, index) => {
                        return <div key={index} style={{
                            'position': 'relative',
                            'background': `url(${dress.imageSource})`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center',
                            'borderRadius': '15px',
                            'backgroundRepeat': 'no-repeat',
                            'height': `${size.width >= 992 ? '350px' : '250px'}`
                        }}>
                            <div style={{
                                'position': 'absolute',
                                'bottom': '0',
                                'padding': '10px 10px'
                            }}>
                                <Label label={dress.label} styles={{
                                    'wordSpacing': '9999px',
                                    'textAlign': 'left',
                                    'fontWeight': '600',
                                    'fontSize': '22px',
                                    'fontFamily': 'Roboto, sans-serif',
                                    'letterSpacing': '0px',
                                    'color': '#FFFFFF',
                                    'textTransform': 'uppercase',
                                    'opacity': '1',
                                    'margin': '0 0 5px 0'
                                }}></Label>
                                <Label label={dress.price} styles={{
                                    'textAlign': 'left',
                                    'fontWeight': '600',
                                    'fontSize': '22px',
                                    'fontFamily': 'Roboto, sans-serif',
                                    'letterSpacing': '0px',
                                    'color': '#FFFFFF',
                                    'textTransform': 'uppercase',
                                    'opacity': '1',
                                    'margin': '0'
                                }}></Label>
                            </div>
                        </div>
                    })}
                </TemplateOneOneOneOne>

                {size.width >= 992 ? null : <div style={{
                    'display': 'grid',
                    'margin': '10px'
                }}>
                    <img src={singleBannerItems[0]} alt="noImage" width="100%" />
                </div>}

                <div style={size.width >= 992 ? {} : {
                    'display': 'flex'
                }}>
                    <Head data={bestTrendingProductsHead} styles={size.width >= 992 ? defaultHeadStyles : customMobileHeadStyles}>
                        <Filter
                            filters={productFilters}
                            filterStyles={size.width >= 992 ? defaultFilterStyles : customFilterStyles}
                            filterHandle={(e) => {}}    
                        />
                        <div style={size.width >= 992 ? {
                            'display': 'grid',
                            'gridTemplateColumns': 'repeat(5, 20%)',
                            'columnGap': '10px',
                            'padding': '25px 80px',
                        } : {
                            'display': 'flex',
                            'overflowX': 'auto',
                            'margin': '0 10px',
                            'gap': '10px'
                        }}>
                            <ProductItems productItems={bestTrendingProducts} styles={customProductStyles} />
                        </div>
                    </Head>
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
