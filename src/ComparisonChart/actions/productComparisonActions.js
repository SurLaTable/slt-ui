export const actionRemoveAll = () => ({
	type: 'REMOVE_ALL'
});

export const actionRemoveProduct = (productId) => ({
	type: 'REMOVE_PRODUCT',
	productId: productId
});

export const actionSetProducts = (selection) => ({
	type: 'SET_PRODUCTS',
	selection: selection
});

const productDataSuccess = (data) => ({
	type: 'PRODUCT_DATA_SUCCESS',
	data: data
});

const toggleSuccess = (productId, checked) => ({
	type: 'TOGGLE_PRODUCT',
	checked: checked,
	productId: productId
});

export function actionToggleProductSelection(productId, checked) {
	return (dispatch) => {
		// import('../data.js' /*webpackChunkName: 'productData'*/).then(
		import(`../productData/${productId}.json`).then((data) => {
			dispatch(productDataSuccess(data['default']));
			dispatch(toggleSuccess(productId, checked));
		});
	};
}
