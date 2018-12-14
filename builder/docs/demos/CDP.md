
This is a demo as if we were on the product page: [CFA-4913802](https://www.surlatable.com/product/CFA-3623923/)
```jsx
<ThemeProvider>
	<StoreProvider>
		<div style={{display:"inline-flex"}}>
				<StoreSelector culinary={true} storeId="004"/>
				<ClassDateTimePicker productId={"CFA-4913802"} sku={"4913802"} storeId="004"/>
		</div>
	</StoreProvider>
</ThemeProvider>
```


```html
<div style="display:inline-flex;">
		<div data-component="StoreSelector" data-prop-culinary="true" data-prop-store-id="004"></div>
		<div data-component="ClassDateTimePicker" data-prop-productId="CFA-4913802"></div>
</div>
```
