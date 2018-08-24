```jsx
initialState = { expanded: false };
<StoreProvider>
	<StoreCard
		storeId="001"
		distance={0.9}
		onChange={() => setState({ expanded: !state.expanded })}
		expanded={state.expanded}
	/>
</StoreProvider>;
```
