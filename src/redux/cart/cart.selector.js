export const selectorProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  );
};

export const selectorProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );
};
