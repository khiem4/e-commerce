import { FaRegUser, FaCartPlus } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={require('../images/shop-logo.jpg')} alt="store-logo" />
      <p className='service support'>Customer support <br />
        <span className='header_phone_number'>0905.xxxx.xxx</span></p>
      <p className='service hotline'>Hotline <br />
        <span className='header_phone_number'>0925.xxxx.xxx</span></p>
      <p className='service feedback'>Service feedback <br />
        <span className='header_phone_number'>090.xxxx.xxxx</span></p>

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