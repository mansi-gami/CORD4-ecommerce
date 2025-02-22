import Product from 'component/product/product'
import { productData } from 'data/product'
import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const wishlist = useSelector(state => state.cartWishlist.wishlist);

    const updatedProductData = productData.map(product => ({
        ...product,
        isWishlisted: wishlist.some(item => item.id === product.id),
    }));

    return (
        <div className='dashboard-page'>
            <h3 className='greeting'>Welcome to Amazon</h3>
            <div className="product-list">
                {updatedProductData.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard