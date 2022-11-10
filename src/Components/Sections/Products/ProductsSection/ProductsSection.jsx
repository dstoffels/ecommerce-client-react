import React, { useState, useEffect } from 'react';
import Section from '../../Section/Section.jsx';
import ProductsGrid from '../ProductsGrid/ProductsGrid.jsx';

import axios from '../../../../fakeAxios.js';
import ProductModal from '../ProductModal/ProductModal.jsx';

const ProductsSection = ({}) => {
	const [productData, setProductData] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const selectedProduct = productData[selectedIndex];

	const fetchProducts = async () => {
		const response = await axios.get('endpointurlexample/');
		setProductData(response.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleModalClose = () => setSelectedIndex(-1);

	return (
		<Section id='products' title='Our Products'>
			<ProductsGrid productData={productData} setSelectedIndex={setSelectedIndex} />
			<ProductModal onClose={handleModalClose} selectedProduct={selectedProduct} />
		</Section>
	);
};

export default ProductsSection;
