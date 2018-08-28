```jsx
let sortStoresByDistance = require('../services/slt-stores').sortStoresByDistance;
let store = require('../StoreProvider').store;
<StoreProvider>
	<LocationField
		onLocated={(locationData) => {
			store.dispatch(sortStoresByDistance(locationData.geometry.location));
		}}
	/>
</StoreProvider>;
```

```html
<div data-component="StoreProvider">
	<div data-component="LocationField"></div>
</div>
```
