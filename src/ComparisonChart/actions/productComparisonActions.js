const actionRemoveAll = sku => ({
    type: 'REMOVE_ALL'
});

const actionRemoveProduct = sku => ({
    type: 'REMOVE_PRODUCT',
    sku: sku
});

const actionToggleCheckbox = (sku, checked) => ({
    type: 'TOGGLE_CHECKBOX',
    sku: sku,
    checked: checked
});

export { actionRemoveAll, actionRemoveProduct, actionToggleCheckbox };
