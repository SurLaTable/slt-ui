
This is a demo as if we were on the product page: [CFA-2519692](https://www.surlatable.com/product/CFA-2519692/)
```jsx
<ThemeProvider>
	<StoreProvider>
		<div style={{display:"inline-flex"}}>
				<StoreSelector culinary={true}/>
				<ClassDateTimePicker productId={"CFA-2519692"}/>
		</div>
	</StoreProvider>
</ThemeProvider>
```


```html
<div style="display:inline-flex;">
		<div data-component="StoreSelector" data-prop-culinary="true"></div>
		<div data-component="ClassDateTimePicker" data-prop-productId="CFA-2519692"></div>
</div>
```
