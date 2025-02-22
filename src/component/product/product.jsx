import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, addToWishlist, removeFromWishlist } from '../../redux/cartWishlistSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.cartWishlist.wishlist);

    const handleWishlistClick = (e) => {
        e.preventDefault();
        dispatch(addToWishlist(product));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        dispatch(addToCart(product));
    };

    return (
        <Link to={`/product/${product.id}`} className='product'>
            <div className="product-image"><img src={product.image} alt="" /></div>
            <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <div className="product-price">₹{product.price}</div>
                <div className="product-footer">
                    <button className="btn-wishlist" onClick={handleWishlistClick}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="btn-cart" onClick={handleCartClick}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default Product;