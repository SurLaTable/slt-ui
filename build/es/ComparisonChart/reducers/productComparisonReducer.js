import _objectSpread from "@babel/runtime/helpers/objectSpread";
import data from '../data';

const productComparisonReducer = (state = {}, action) => {
  let selection = state.selection ? state.selection.slice() : [];

  switch (action.type) {
    case 'REMOVE_ALL':
      return _objectSpread({}, state, {
        selection: []
      });

    case 'REMOVE_PRODUCT':
      for (let i = selection.length - 1; i >= 0; i--) {
        if (selection[i].id == action.productId) {
          selection.splice(i, 1);
          break;
        }
      }

      return _objectSpread({}, state, {
        selection
      });

    case 'TOGGLE_PRODUCT':
      if (action.checked) {
        selection.push(data[action.productId]);
      } else {
        for (let i = selection.length - 1; i >= 0; i--) {
          if (selection[i].id == action.productId) {
            selection.splice(i, 1);
            break;
          }
        }
      }

      return _objectSpread({}, state, {
        selection
      });

    case 'SET_PRODUCTS':
      return _objectSpread({}, state, {
        selection: action.selection.slice()
      });

    default:
      return _objectSpread({
        selection
      }, state);
  }
};

export default productComparisonReducer;