import { combineReducers } from 'redux';
const checkboxReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHECK_CHECKBOX':
      return {
        ...state,
        checked: true,
      };

    case 'UNCHECK_CHECKBOX':
      return {
        ...state,
        checked: false,
      };
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        checked: !action.checked,
      };
    default:
      return state;
  }
};

// This combines all reducers, so they can be modular:
const reducers = combineReducers({
  checkboxReducer,
});

export default reducers;
