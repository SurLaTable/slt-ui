```jsx
let Typography = require('@material-ui/core/Typography').default;

	<StoreCard
		storeId="154"
		name="Fashion Place"
		distance={1}
		location={{
			zip: '84107',
			state: 'Utah',
			city: 'Murray',
			address1: '6117 S. State Street #B139'
		}}
		hours={{
			'Mon - Fri': ' 10am - 9pm',
			Sun: ' Noon - 6pm',
			Holiday: 'Call store for holiday hours',
			Sat: ' 10am - 9pm'
		}}
		contactInfo={{
			phoneNumber: '801-281-6642'
		}}
	>
		<Typography> Children nodes land in this column</Typography>
	</StoreCard>

```

```html
<div data-component="StoreProvider">
	<div data-component="StoreCard" data-prop-store-id="001" data-prop-detailed="true">
		<!-- Childen nodes can go in here -->
	</div>
</div>
```
