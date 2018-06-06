import _Object$keys from "@babel/runtime/core-js/object/keys";

const sortProducts = productData => productData && _Object$keys(productData).sort((x, y) => productData[x].timeAdded - productData[y].timeAdded) || [];

export default sortProducts;