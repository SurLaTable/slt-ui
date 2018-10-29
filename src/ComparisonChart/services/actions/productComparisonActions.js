export const actionRemoveAll = () => ({
	type: 'REMOVE_ALL'
});

export const actionRemoveProduct = (id) => ({
	type: 'REMOVE_PRODUCT',
	id: id
});

export const actionSetProducts = (selection) => ({
	type: 'SET_PRODUCTS',
	selection: selection
});

const productDataSuccess = (data) => ({
	type: 'PRODUCT_DATA_SUCCESS',
	data: data
});

const toggleSuccess = (id, checked) => ({
	type: 'TOGGLE_PRODUCT',
	checked: checked,
	id: id
});

var productCache = {};

export const actionToggleProductSelection = (id, checked) => {
	return (dispatch) => {
		if (productCache[id]) {
			return Promise.resolve(dispatch(toggleSuccess(id, checked)));
		} else {
			return import(`../productData/${id}.json`).then((data) => {
				// No need to store the data, if we already have it.
				productCache[id] = true;
				dispatch(productDataSuccess({ [id]: { ...data } }));
				dispatch(toggleSuccess(id, checked));
			});
		}
	};
};
