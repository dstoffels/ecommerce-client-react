import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';

import './ProductsGrid.css';

const ProductsGrid = ({ productData, setSelectedIndex }) => {
	// when clicked, we need to somehow select that product from productData
	const productCards = productData.map((productObj, index) => (
		<ProductCard data={productObj} key={index} index={index} setSelectedIndex={setSelectedIndex} />
	));

	return <div className='products-grid'>{productCards}</div>;
};

export default ProductsGrid;
