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

export function actionToggleProductSelection(id, checked) {
	return (dispatch) => {
		if (productCache[id]) {
			return Promise.resolve(dispatch(toggleSuccess(id, checked)));
		} else {
			return import(`../productData/${id}.json`).then((data) => {
				productCache[id] = true; //no need to store the data, just if we've got it before
				dispatch(productDataSuccess({ [id]: { ...data } }));
				dispatch(toggleSuccess(id, checked));
			});
		}
	};
}
