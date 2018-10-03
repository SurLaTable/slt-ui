
This is a demo as if we were on the product page: [CFA-4717237](https://www.surlatable.com/product/CFA-4717237/)
```jsx
<ThemeProvider>
	<StoreProvider>
		<div style={{display:"inline-flex"}}>
				<StoreSelector culinary={true}/>
				<ClassDateTimePicker productId={"CFA-4717237"}/>
		</div>
	</StoreProvider>
</ThemeProvider>
```


```html
<div style="display:inline-flex;">
		<div data-component="StoreSelector" data-prop-culinary="true"></div>
		<div data-component="ClassDateTimePicker" data-prop-productId="CFA-4717237"></div>
</div>
```
