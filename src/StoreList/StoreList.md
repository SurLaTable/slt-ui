```jsx
<StoreProvider>
	<LocationButton>Use My Location</LocationButton>
	<StoreList sortBy={'distance'} limit={10} detailed={false} />
</StoreProvider>
```

```html
<div data-component="StoreProvider">
	<div data-component="StoreList" data-prop-sort-by="distance"></div>
</div>
```
