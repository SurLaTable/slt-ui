```jsx {"props":{"style":{"maxHeight":"500px"}}}
<ThemeProvider>
	<StoreProvider>
		<StoreList sortBy={'alphabetically'} limit={10} detailed={false} />
	</StoreProvider>
</ThemeProvider>
```

```html
<div data-component="StoreList" data-prop-sort-by="alphabetically" data-prop-limit="10" data-prop-detailed="false"></div>
```
