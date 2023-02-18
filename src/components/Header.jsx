import { useState, useRef, useEffect } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { IoMdCart } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Notification from './Notification'

const Header = () => {
  const cart = useSelector(state => state.cart)
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
    window.addEventListener('click', function (e) {
      if (!navigationDiv.current.contains(e.target)) {
        return setNavigation(true)
      }
    })
  }

  return (
    <>
      <div className='header'>
        <div ref={navigationDiv} className='navigation_container'>
          <button onClick={handleClick}>
            <AiOutlineUnorderedList size={30} />
          </button>
          <div className='logo_header'>
            <Link to={'/'}>
              <img src={require('../images/logo.jpg')} alt="store-logo"></img>
            </Link>
          </div>
          <div
            className={isNavigationHidden}
            onClick={() => clickedOutSideDiv()}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products/all'}>Products</NavLink>
            <NavLink to={'/cart'}>Cart</NavLink>
            <button className='close_navigation'
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
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
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