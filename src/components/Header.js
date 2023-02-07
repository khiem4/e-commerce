import { useEffect } from 'react'
import { useState } from 'react'
import { FaRegUser, FaCartArrowDown } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import productService from '../services/products'

const Header = ({ }) => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    const fetchCart = async () => {
      const response = await productService.getCart()
      setCart(response)
    }
    fetchCart()
  }, [cart])

  return (
    <div className='header'>
      <div className='logo_header'>
        <Link to={'/'}>
          <img src={require('../images/logo.jpg')} alt="store-logo"></img>
        </Link>
      </div>
      <div className="navigate">
        <NavLink to={'/'}>Home</NavLink >
        <NavLink to={'/products/all'}>Products</NavLink >
        <NavLink to={'/cart'}>Cart</NavLink >
      </div>
      <div className="user_cart">
        <div className='header-dropdown'>
          <div className="icons user">
            <FaRegUser size={25} />
          </div>
          <div className='user-dropdown-content'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
        </div>
        <div className="icons cart">
          <Link to='/cart'>
            <FaCartArrowDown size={20} />
          </Link>
          <div className='cart_length'>
            {cart.length}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Header