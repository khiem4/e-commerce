import { FaRegUser, FaCartArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo_header'>
        <img src={require('../images/logo.jpg')} alt="store-logo" />
      </div>
      <div className="services">
        <p className='support'>Customer support <br />
          <span className='phone_number'>0905.xxxx.xxx</span>
        </p>
        <p className='hotline'>Hotline <br />
          <span className='phone_number'>0925.xxxx.xxx</span>
        </p>
        <p className='feedback'>Service feedback <br />
          <span className='phone_number'>090.xxxx.xxxx</span>
        </p>
      </div>

      <div className="user-cart">
        <div className='header-dropdown'>
          <div className="icons">
            <FaRegUser className='user-dropdown' size={25} />
          </div>
          <div className='user-dropdown-content'>
            <Link to='/login'>Login</Link>
            <a className='user' href="#">Sign-in</a>
          </div>
        </div>
        <div className="icons">
          <FaCartArrowDown className='cart' size={25} />
        </div>
      </div>
    </div >
  )
}

export default Header