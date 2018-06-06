const actionRemoveAll = () => ({
  type: 'REMOVE_ALL',
});

const actionRemoveProduct = productId => ({
  type: 'REMOVE_PRODUCT',
  productId: productId,
});

const actionToggleProductSelection = (productId, checked) => ({
  type: 'TOGGLE_PRODUCT',
  checked: checked,
  productId: productId,
});

const actionSetProducts = selection => ({
  type: 'SET_PRODUCTS',
  selection: selection,
});

export { actionRemoveAll, actionRemoveProduct, actionToggleProductSelection, actionSetProducts };
