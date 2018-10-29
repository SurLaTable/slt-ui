const productComparisonReducer = (state = {}, action) => {
	let selection = state.selection ? state.selection.slice() : [];
	let data = state.productData || {};

	switch (action.type) {
		case 'REMOVE_ALL':
			return {
				...state,
				selection: [],
				persist: true
			};
		case 'REMOVE_PRODUCT':
			for (let i = selection.length - 1; i >= 0; i--) {
				if (selection[i].id === action.id) {
					selection.splice(i, 1);
					break;
				}
			}

			return {
				...state,
				selection,
				persist: true
			};

		case 'TOGGLE_PRODUCT':
			return {
				...state,
				selection: action.checked
					? [...selection, data[action.id]]
					: selection.filter((product) => product.id !== action.id),
				persist: true
			};

		case 'SET_PRODUCTS':
			return {
				...state,
				selection: action.selection.slice(),
				persist: true
			};

		case 'PRODUCT_DATA_SUCCESS':
			return {
				...state,
				productData: {
					...data,
					...action.data
				},
				persist: true
			};

		default:
			return {
				selection,
				...state,
				persist: true
			};
	}
};

export default productComparisonReducer;
