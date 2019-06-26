
This is a demo as if we were on the product page: [CFA-2519692](https://www.surlatable.com/product/CFA-3623923/)
```jsx
initialState = {productId:'CFA-5202742', sku:''}
;<ThemeProvider>
	<input onChange={e => setState({productId:e.target.value})} value={state.productId} />
	<input onChange={e => setState({sku:e.target.value})} value={state.sku} />
	<br/>
	<StoreProvider>
		<div style={{display:"inline-flex"}}>
				<StoreSelector culinary={true} storeId="004"/>
				<ClassDateTimePicker productId={state.productId} sku={state.sku}/>
		</div>
	</StoreProvider>
</ThemeProvider>
```


```html
<div style="display:inline-flex;">
		<div data-component="StoreSelector" data-prop-culinary="true" data-prop-store-id="004"></div>
		<div data-component="ClassDateTimePicker" data-prop-productId="CFA-3623923"></div>
</div>
```
