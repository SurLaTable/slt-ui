# Components

Components should be in a folder with the name of the component matching and match `/[A-Z]*/`

Components should have an index.js that exports the Component  
**src/Component/index.js**

```js
//This is optional but exposes everything except the default
export * from './Component.js';
//You need to expose the default as the name of the component
export { default as Component } from './Component.js';
```

If your component is going to have sub components, they should each be in their own folder to allow documentation `MainComponent/SubComponent` and example would be the **ComparisonChart**, it's what we'd call an app component, it is made up only of it's sub components, each in thier own sub folders.

To document a component add a **README&period;md** next to the **Component.js**.
Also use `Component.propTypes` and `Component.defaultProps` in your component file.
Check [react-styleguidist](https://github.com/styleguidist/react-styleguidist/) for more details.

# Services

Services are things that allow an api to communicate with redux, which in turn gives your components access to the data.

**Api keys** should only be retrieved from `process.env` or from `global` keys should not be written into source code. You can create a `.env` file in the base directory and put your keys in there for testing in the docs

Typically this is what a service should look like
**services/service-name/index.js**

```js
import { addAsyncReducers } from '../../utils/storeTools';
import { store } from '../../StoreProvider';
import reducers from './reducers';

addAsyncReducers(store, reducers);

export * from './actions';
```

**services/service-name/actions/index.js**

```js
const API_KEY = process.env.SERVICE_NAME_API_KEY || global.SERVICE_NAME_API_KEY;
export const actionName = () => {
	return {
		type: 'ACTION_TYPE'
	};
	// we alos have redux-thunk middleware
	return (dispatch) => {
		// do async stuff
	};
};
```

**services/service-name/reducers/index.js**

```js
import { createReducer } from '../../../utils/storeTools';

const actionHandlers = {
	ACTION_TYPE: (state, action) => {
		return {
			...state
		};
	}
};
const initialState = {};

export default {
	//export an object to name the reducer
	serviceName: createReducer(initialState, actionHandlers)
};
```
