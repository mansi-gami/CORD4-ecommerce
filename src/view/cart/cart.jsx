import Product from 'component/product/product';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Cart = () => {
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const cart = useSelector(state => state.cartWishlist.cart);

    if (!isAuthenticated) {
        return (
            <>No Login</>
        )
    }

    return (
        <div className='product-list'>
            {cart.length > 0 ? (
                cart.map((product, index) => (
                    <Product key={index} product={product} />
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;