import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import cartWishlistReducer from './cartWishlistSlice';
import { initializeAuth } from './loginActions';
import localStorageMiddleware from './localStorageMiddleware';

const store = configureStore({
  reducer: {
    login: loginReducer,
    cartWishlist: cartWishlistReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

const username = localStorage.getItem('username');
if (username) {
  store.dispatch(initializeAuth({ name: username }));
}

const cart = JSON.parse(localStorage.getItem('cart'));
if (cart && cart.length > 0 && store.getState().cartWishlist.cart.length === 0) {
  cart.forEach(item => store.dispatch({ type: 'cartWishlist/addToCart', payload: item }));
}

const wishlist = JSON.parse(localStorage.getItem('wishlist'));
if (wishlist && wishlist.length > 0 && store.getState().cartWishlist.wishlist.length === 0) {
  wishlist.forEach(item => store.dispatch({ type: 'cartWishlist/addToWishlist', payload: item }));
}

export default store;