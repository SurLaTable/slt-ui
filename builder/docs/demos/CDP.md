
This is a demo as if we were on the product page: [CFA-2519692](https://www.surlatable.com/product/CFA-3623923/)
```jsx
initialState = {value:'CFA-5202742'}
;<ThemeProvider>
	<input onChange={e => setState({value:e.target.value})} value={state.value} /><br/>
	<StoreProvider>
		<div style={{display:"inline-flex"}}>
				<StoreSelector culinary={true} storeId="004"/>
				<ClassDateTimePicker productId={state.value}/>
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
