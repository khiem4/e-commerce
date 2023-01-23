import { FaRegUser, FaCartArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo_header'>
        <Link to={'/'}>
          <img src={require('../images/logo.jpg')} alt="store-logo"></img>
        </Link>
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

      <div className="user_cart">
        <div className='header-dropdown'>
          <div className="icons">
            <FaRegUser size={25} />
          </div>
          <div className='user-dropdown-content'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
        </div>
        <Link
          className="icons"
          to='/cart'>
          <FaCartArrowDown size={25} />
        </Link>
      </div>
    </div >
  )
}

export default Header