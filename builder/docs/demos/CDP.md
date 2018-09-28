
This is a demo as if we were on the product page: [CFA-1865039](https://www.surlatable.com/product/CFA-1865039/)
```jsx
<StoreProvider>
	<div style={{display:"inline-flex"}}>
			<StoreSelector />
			<ClassDateTimePicker productId={"CFA-1865039"}/>
	</div>

</StoreProvider>
```


```html
<div data-component="StoreProvider">
	<div style="display:inline-flex;">
			<div data-component="StoreSelector" ></div>
			<div data-component="ClassDateTimePicker" data-prop-productId="CFA-1865039"></div>
	</div>
</div>
```
