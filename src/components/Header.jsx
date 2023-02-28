import { FaRegUser } from 'react-icons/fa'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { IoMdCart } from 'react-icons/io'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Notification from './Notification'
import { logOut } from '../reducers/userReducer'
import { removeMessage, successMessage } from '../reducers/notificationReducer'

const Header = () => {
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [navigation, setNavigation] = useState(true)
  const navigationDiv = useRef()
  const location = useLocation().pathname

  useEffect(() => {
    setNavigation(true)
  }, [location])

  const handleClick = () => {
    setNavigation(!navigation)
  }

  const isNavigationHidden = navigation ? 'navigation_hidden' : 'navigation_show'

  const clickedOutSideDiv = () => {
    document.addEventListener('click', function (e) {
      if (!navigationDiv.current.contains(e.target)) {
        return setNavigation(!navigation)
      }
    })
  }

  const handleLogout = () => {
    dispatch(logOut())
    window.localStorage.removeItem('loggedAppUser')
    dispatch(successMessage('Logout successful'))
    dispatch(removeMessage(2000))
  }

  return (
    <>
      <div className='header'>
        <div
          ref={navigationDiv}
          className='navigation_container'>
          <button onClick={handleClick}>
            <AiOutlineUnorderedList size={30} />
          </button>
          <div className='logo_header'>
            <Link to={'/'}>
              <img src={require('../images/logo.jpg')} alt="store-logo" />
            </Link>
          </div>
          <div
            className={isNavigationHidden}
            onClick={() => clickedOutSideDiv()}>
            <NavLink to={'/'}>
              Home
            </NavLink>
            <NavLink to={'/products'}>
              Products
            </NavLink>
            <NavLink to={'/cart'}>
              Cart
            </NavLink>
            <button
              className='close_navigation'
              onClick={handleClick}>
              X
            </button>
          </div>
        </div>
        <div className="icons_of_user_cart">
          <div className='header_user_dropdown'>
            <div className="icons user_header">
              <FaRegUser size={25} />
            </div>
            <div className='user_dropdown_content'>
              {user ?
                <>
                  <Link to='/user'>User</Link>
                  <Link onClick={handleLogout} >Logout</Link>
                </>
                :
                <>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </>
              }
            </div>
          </div>
          <div className="icons cart_header">
            <Link to='/cart'>
              <IoMdCart size={20} />
            </Link>
            <div className='cart_items_length'>
              {cart.length}
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </>
  )
}

export default Header