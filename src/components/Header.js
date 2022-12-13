import { useState } from 'react'
import './header.css'
import { FaRegUser, FaCartPlus } from 'react-icons/fa'

const Header = ({ products }) => {
  // const [filterProduct, setFilterProduct] = useState('')

  // const search = (event) => {
  //   event.preventDefault()
  //   setFilterProduct(event.target.value)
  // }

  // const filter = filterProduct
  //   ? products.filter(item =>
  //     item.title.toLowerCase().includes(filterProduct.toLowerCase()))
  //   : products

  return (
    <>
      <div className='header'>
        <img className='logo' src={require('../icons/shop-logo.jpg')} alt="store-logo" />
        <p className='service support'>Customer support <br />
          0905.xxxx.xxx</p>
        <p className='service hotline'>Hotline <br />
          0923.xxxx.xxxx</p>
        <p className='service feedback'>Service feedback <br />
          0922.xxx.xxxx</p>

        <div className="user-cart">
          <div className='dropdown'>
            <div className="icons">
              <FaRegUser className='user-dropdown' size={25} />
            </div>
            <div className='dropdown-content'>
              <a className='user' href="#">Login</a>
              <a className='user' href="#">Logout</a>
            </div>
          </div>
          <div className="icons">
            <FaCartPlus className='cart' size={25} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Header