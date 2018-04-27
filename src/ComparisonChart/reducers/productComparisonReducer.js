import data from '../data';

const productComparisonReducer = (state = {}, action) => {
    let productData = state.productData || {};

    switch (action.type) {
        case 'REMOVE_ALL':
            Object.keys(productData).forEach(key => delete productData[key]);

            return {
                productData: productData,
                ...state
            };
        case 'REMOVE_PRODUCT':
            delete productData[action.sku];

            return {
                productData: productData,
                ...state
            };

        case 'TOGGLE_CHECKBOX':
            if (action.checked) {
                productData[action.sku] = data[action.sku];
                productData[action.sku].checked = action.checked;
                productData[action.sku].timeAdded = Date.now();
            } else {
                delete productData[action.sku];
            }

            return {
                productData: productData,
                ...state
            };

        default:
            return state;
    }
};

export default productComparisonReducer;
