const localStorageMiddleware = store => next => action => {
  const result = next(action);
  if (action.type.startsWith('cartWishlist/')) {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cartWishlist.cart));
    localStorage.setItem('wishlist', JSON.stringify(state.cartWishlist.wishlist));
  }
  return result;
};

export default localStorageMiddleware;