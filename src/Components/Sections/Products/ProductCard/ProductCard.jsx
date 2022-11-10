import React from 'react';

import './ProductCard.css';

const ProductCard = ({ data, setSelectedIndex, index }) => {
	const handleClick = () => setSelectedIndex(index);

	return (
		<div onClick={handleClick} className='product-card'>
			<h3>{data.name}</h3>
			<p>{data.description}</p>
			<h5>{data.price}</h5>
		</div>
	);
};

export default ProductCard;
