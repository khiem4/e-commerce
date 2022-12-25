import { FaRegUser, FaCartPlus } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img
          src={require('../images/shop-logo.jpg')} alt="store-logo" />
      </div>
      <div className="services">
        <p className='support'>Customer support <br />
          <span className='phone_number'>0905.xxxx.xxx</span></p>
        <p className='hotline'>Hotline <br />
          <span className='phone_number'>0925.xxxx.xxx</span></p>
        <p className='feedback'>Service feedback <br />
          <span className='phone_number'>090.xxxx.xxxx</span></p>
      </div>

      <div className="user-cart">
        <div className='header-dropdown'>
          <div className="icons">
            <FaRegUser className='user-dropdown' size={25} />
          </div>
          <div className='user-dropdown-content'>
            <a className='user' href="#">Login</a>
            <a className='user' href="#">Logout</a>
          </div>
        </div>
        <div className="icons">
          <FaCartPlus className='cart' size={25} />
        </div>
      </div>
    </div>
  )
}

export default Header