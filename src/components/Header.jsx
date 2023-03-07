import { FaRegUser } from 'react-icons/fa'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { IoMdCart } from 'react-icons/io'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { userLogout } from '../reducers/userReducer'
import { successMessage } from '../reducers/notificationReducer'
import Notification from './Notification'
import logo from '../images/logo.jpg'

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const cart = useSelector((state) => state.cart)
  const [navigation, setNavigation] = useState(false)
  const navigationRef = useRef()
  const location = useLocation().pathname

  useEffect(() => {
    setNavigation(false)

    function handleClickOutside(event) {
      if (!navigationRef.current.contains(event.target)) {
        setNavigation(false)
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [location])

  const handleOpenAndClose = () => {
    setNavigation(!navigation)
  }

  const handleLogout = () => {
    dispatch(userLogout())
    dispatch(successMessage('Logout successful', 2000))
  }

  const isNavigationHidden = navigation
    ? 'navigation_show'
    : 'navigation_hidden'

  return (
    <>
      <div className="header">
        <div
          ref={navigationRef}
          className="navigation_container"
        >
          <button
            type="button"
            onClick={handleOpenAndClose}
            title="menu"
          >
            <AiOutlineUnorderedList size={30} />
          </button>
          <div className="logo_header">
            <Link to="/">
              <img src={logo} alt="store-logo" />
            </Link>
          </div>
          <div
            className={isNavigationHidden}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <button
              type="button"
              className="close_navigation"
              onClick={handleOpenAndClose}
            >
              X
            </button>
          </div>
        </div>
        <div className="icons_of_user_cart">
          <div className="header_user_dropdown">
            <div className="icons user_header">
              <FaRegUser size={25} />
            </div>
            <div className="user_dropdown_content">
              {user
                ? (
                  <>
                    <Link to="/user">User</Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                )
                : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
            </div>
          </div>
          <div className="icons cart_header">
            <Link to="/cart" title="cart">
              <IoMdCart size={20} />
            </Link>
            <div className="cart_items_length">
              {user
                ? cart.length
                : 0}
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </>
  )
}

export default Header
