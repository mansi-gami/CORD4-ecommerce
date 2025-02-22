import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/loginActions'
import logo from 'assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { route } from 'routes/routes'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuthenticated, user } = useSelector(state => state.login)
    const cartCount = useSelector(state => state.cartWishlist.cart.length);
    const wishlistCount = useSelector(state => state.cartWishlist.wishlist.length);

    console.log(wishlistCount)
    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('username')
    }

    return (
        <div className='header'>
            <div className='header__logo' onClick={() => navigate('/')}>
                <img src={logo} alt="" />
            </div>
            <div className='header__menu'>
                {isAuthenticated ? (
                    <div className="user-info">
                        <div className='username'>
                            Welcome, {user.name}
                        </div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <Link to={route.login} className="btn-sign-in">
                        <FontAwesomeIcon icon={faUser} /> Sign In
                    </Link>
                )}
                <div className='wishlist'>
                    <Link to={route.wishlist} className="btn-wishlist">
                        <div className="count">{wishlistCount}</div>
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                </div>
                <div className='cart'>
                    <Link to={route.cart} className="btn-cart">
                        <div className="count">{cartCount}</div>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header