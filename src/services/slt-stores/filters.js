export const filterItemsAlphabetically = (items = []) => {
	return items.slice().sort((a, b) => {
		return a.name < b.name ? -1 : 1;
	});
};

export const filterItemsById = (items = []) =>
	items.reduce((acc, item) => {
		acc[item.storeId] = item;
		return acc;
	}, {});
