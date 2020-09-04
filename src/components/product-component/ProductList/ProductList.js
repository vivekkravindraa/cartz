import React from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';

import repeat from '../../../assets/images/product-list-assets/repeat/repeat.svg';
import backArrow from '../../../assets/images/home-component-assets/backArrow/backArrow.png';
import search from '../../../assets/images/home-component-assets/search/search.svg';
import favourite from '../../../assets/images/home-component-assets/favourite/favourite.svg';
import bag from '../../../assets/images/home-component-assets/bag/bag.png';
import sortBy from '../../../assets/images/product-list-assets/sortBy/sortBy.svg';
import filterBy from '../../../assets/images/product-list-assets/filterBy/filterBy.svg';

import Header from '../../../common-components/Header/Header';
import Footer from '../../../common-components/Footer/Footer';
import Navigation from '../../../common-components/Navigation/Navigation';

import {
    filterByChoiceItems,
    filterByBrandItems,
    filterByPriceItems,
    filterByDiscountItems,
    productListItems
} from './ProductListJsonData';

import ProductItems from '../../../building-blocks/molecules/Product/ProductItems';
import { productListStyles } from '../../../building-blocks/molecules/Product/ProductStyles';

import './ProductList.css';

export default function ProductList() {
    const size = useWindowSize();

    return (
        <div className="productListContainer">
            {size.width >= 992 ? <Header /> : null}
            <div className="productListHeader">
                <div className="productListBreadcrumbs">
                    <p>Home / Electronic / Audio device</p>
                    <p>Audio Devices - 57917 items</p>
                </div>
                <div className="productListSortBy">
                    <img src={repeat} alt="noImage" height="16" />
                    <p>Sort by</p>
                    <select>
                        <option>Most Relevant</option>
                    </select>
                </div>
            </div>
            <div className="productListMobileHeader">
                <div>
                    <img src={backArrow} alt="noImage" height="24" />
                    <p>Audio Devices</p>
                </div>
                <div>
                    <img src={search} alt="noImage" height="32" />
                    <img src={favourite} alt="noImage" height="32" />
                    <img src={bag} alt="noImage" height="32" />
                </div>
            </div>
            <div className="productListFilterByChoice">
                <p>FILTER BY CHOICE</p>
                {
                    size.width >= 992
                ?
                    filterByChoiceItems.map((choice, index) => {
                        return <button key={index}>{choice.title}</button>
                    })
                :   
                    filterByChoiceItems.map((choice, index) => {
                        return <div key={index} className="productListMobileFilterByChoice">
                            <img src={choice.imageSource} alt="noImage" height="16" />
                            <p>{choice.title}</p>
                        </div>
                    })
                }
            </div>
            <div className="productListContent">
                <div className="productListFilters">
                    <div className="productListBrands">
                        <p>BRAND</p>
                        <div className="productListFilterByBrands">
                            {filterByBrandItems.map((brand, index) => {
                                return <div key={index} className="productListFilterByBrand">
                                    <input type="checkbox" />
                                    <p> {brand.name} </p>
                                    <p>({brand.count})</p>
                                </div>
                            })}
                            <p>+50 MORE</p>
                        </div>
                    </div>
                    <div className="productListPrices">
                        <p>PRICE</p>
                        <div className="productListFilterByPrices">
                            {filterByPriceItems.map((price, index) => {
                                return <div key={index} className="productListFilterByPrice">
                                    <input type="checkbox" />
                                    <p> {price.range}</p>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="productListDiscounts">
                        <p>DISCOUNT</p>
                        <div className="productListFilterByDiscounts">
                            {filterByDiscountItems.map((discount, index) => {
                                return <div key={index} className="productListFilterByDiscount">
                                    <input type="checkbox" />
                                    <p> {discount.percentage}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="productListItems">
                    <ProductItems productItems={productListItems} styles={productListStyles} />
                </div>
            </div>
            <div className="productListMobileFilters">
                <div className="productListMobileFilterBy">
                    <img src={filterBy} alt="noImage" height="16" />
                    <p>Filter</p>
                </div>
                <div className="productListMobileSortBy">
                    <img src={sortBy} alt="noImage" height="16" />
                    <p>Sort</p>
                </div>
            </div>
            {size.width >= 992 ? <Footer /> : null}
            {size.width >= 992 ? null : <div className="mobileNavigation"><Navigation /></div>}
        </div>
    )
}
