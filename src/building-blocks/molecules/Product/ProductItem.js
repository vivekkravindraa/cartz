import React from 'react';

import favourite from '../../../assets/images/home-component-assets/favourite/favourite.svg';
import donutChart from '../../../assets/images/home-component-assets/donutChart/donutChart.svg';

export default function ProductItem({
    styles,
    index,
    id,
    productId,
    setId,
    brandName,
    productImage,
    productName,
    productPrice,
    productMarketPrice,
    productSavingPrice,
    productOfferTag,
    productDetails,
    isSaving
}) {
    return (
        <div
            onMouseEnter={() => setId(productId)}
            onMouseLeave={() => setId(0)}
            className="productItem"
            key={index}
            style={styles.productItem}
        >
            <div className="productImage">
                <img className="productPicture" src={productImage} alt="noImage" style={styles.productImage} />
            </div>
            <div className="brandName">
                <p style={styles.brandNameText}>{brandName}</p>
            </div>
            <div className="productName">
                <p style={styles.productNameText}>{productName}</p>
            </div>
            <div className="productPriceAndCart" style={styles.productPriceAndCart}>
                <div className="productPrice">
                    <p style={styles.productPriceText}>{productPrice}</p>
                </div>
                <div className="productMarketPrice" style={styles.productMarkerPrice}>
                    <p style={styles.productMarketPriceText}>{productMarketPrice}</p>
                </div>
                {
                    window.location.pathname !== "/" && window.location.pathname !== "/product-list" ?
                        <div className="productAddToCart" style={styles.productAddToCart}>
                            <button className="addToCart" style={styles.addToCart}>Add</button>
                        </div>
                    : null
                }
            </div>
            {
                productOfferTag ? <div className="productOfferTag" style={styles.productOfferTag}>
                        <p style={styles.productOfferTagText}>{productOfferTag}</p>
                    </div>
                : null
            }
            {
                isSaving && id === productId ?
                    <div className="productSavingPrice" style={styles.productSavingPrice}>
                        <p style={styles.productSavingPriceText}>Saving {productSavingPrice}</p>
                    </div>
                : null
            }
            {
                isSaving && window.location.pathname === "/product-list" &&
                <div className="productSavingPrice" style={styles.productSavingPrice}>
                    <p style={styles.productSavingPriceText}>Saving {productSavingPrice}</p>
                </div>
            }
            <div className="productAbsoluteImages" style={styles.productAbsoluteImages}>
                {id === productId && window.location.pathname !=="/product-list" ? <img src={favourite} alt="noImage" height="24" /> : null}
                {window.location.pathname === "/product-list" && <img src={favourite} alt="noImage" height="24" />}
                {id === productId ? <img src={donutChart} alt="noImage" height="24" /> : null}
                <div style={{ position: 'absolute', top: '24px', left: '-8px' }}>
                    {id === productId ? <img src={donutChart} alt="noImage" height="24" /> : null}
                </div>
            </div>
            <div className="productDetails" style={styles.productDetails}>
                {productDetails && productDetails.length ? productDetails.map((detail, index) => {
                    return <li key={index}>{detail}</li>
                }) : null}
            </div>
        </div>
    )
}
