const actionRemoveAll = () => ({
  type: 'REMOVE_ALL',
});

const actionRemoveProduct = productID => ({
  type: 'REMOVE_PRODUCT',
  productID: productID,
});

const actionToggleProductSelection = (productID, checked) => ({
  type: 'TOGGLE_PRODUCT',
  checked: checked,
  productID: productID,
});

const actionSetProducts = selection => ({
  type: 'SET_PRODUCTS',
  selection: selection,
});

export { actionRemoveAll, actionRemoveProduct, actionToggleProductSelection, actionSetProducts };
