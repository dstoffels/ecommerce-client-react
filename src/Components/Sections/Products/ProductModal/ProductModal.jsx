import React from 'react';
import Modal from '../../../Modal/Modal.jsx';

const ProductModal = ({ onClose, selectedProduct }) => {
	return (
		<Modal title={selectedProduct?.name} onClose={onClose} show={selectedProduct}>
			<div>
				<p>{selectedProduct?.description}</p>
				<h5>{selectedProduct?.price}</h5>
			</div>
		</Modal>
	);
};

export default ProductModal;
