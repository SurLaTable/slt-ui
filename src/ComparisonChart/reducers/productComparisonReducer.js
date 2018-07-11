const productComparisonReducer = (state = {}, action) => {
	console.log(action);
	let selection = state.selection ? state.selection.slice() : [];
	let data = state.productData || {};
	console.log('data:', data);

	switch (action.type) {
		case 'REMOVE_ALL':
			return {
				...state,
				selection: []
			};
		case 'REMOVE_PRODUCT':
			for (let i = selection.length - 1; i >= 0; i--) {
				if (selection[i].id === action.productId) {
					selection.splice(i, 1);
					break;
				}
			}

			return {
				...state,
				selection
			};

		case 'TOGGLE_PRODUCT':
			return {
				...state,
				selection: action.checked
					? [...selection, data[action.productId]]
					: selection.filter(
							(product) => product.id !== action.productId
					  )
			};

		case 'SET_PRODUCTS':
			return {
				...state,
				selection: action.selection.slice()
			};

		case 'PRODUCT_DATA_SUCCESS':
			return {
				...state,
				productData: action.data
			};

		default:
			return {
				selection,
				...state
			};
	}
};

export default productComparisonReducer;
