import { combineReducers } from 'redux';
import productComparisonReducer from './productComparisonReducer';

// This combines all reducers, so they can be modular:
const sltReducers = combineReducers({
	productComparisonReducer,
});

export default sltReducers;
