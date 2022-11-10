const responseObj = {
	data: [
		{ id: 0, name: 'product1', price: 99.99, description: 'This is a cool product', imgUrl: '' },
		{ id: 1, name: 'product2', price: 99.99, description: 'This is a cool product', imgUrl: '' },
		{ id: 2, name: 'product3', price: 99.99, description: 'This is a cool product', imgUrl: '' },
		{ id: 3, name: 'product4', price: 99.99, description: 'This is a cool product', imgUrl: '' },
		{ id: 4, name: 'product5', price: 99.99, description: 'This is a cool product', imgUrl: '' },
		{ id: 5, name: 'product6', price: 99.99, description: 'This is a cool product', imgUrl: '' },
	],
};

const get = async (url = '') => responseObj;

export default { get };
