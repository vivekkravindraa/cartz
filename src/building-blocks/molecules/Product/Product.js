import React from 'react';
import ProductItems from './ProductItems';
import productItems from './ProductItemsJsonData';

export default function Product() {
    return <ProductItems productItems={productItems} />
}
