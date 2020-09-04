import React, { useState, useCallback } from 'react';
import ProductItem from './ProductItem';

export default function ProductItems({ productItems, styles }) {
    const [ id, setId ] = useState(0);

    const callbackSetId = useCallback((id) => { setId(id); }, []);

    return productItems.map((product, index) => {
        return <ProductItem
            styles={styles}
            key={index}
            index={index}
            id={id}
            productId={product.id}
            setId={callbackSetId}
            brandName={product.brandName}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
            productMarketPrice={product.productMarketPrice}
            productSavingPrice={product.productSavingPrice}
            productOfferTag={product.productOfferTag}
            productDeatils={product.productDeatils}
            isSaving={product.isSaving}
        />
    });
};
