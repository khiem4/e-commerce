import { GrLocation, GrPhone } from 'react-icons/gr'
import { BsInfoCircle, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="footer_info">
        <div className='footer contact'>
          <h4>CONTACT INFO</h4>
          <ul>
            <li> <GrLocation /> 221B Baker Street, London, England</li>
            <li><GrPhone /> <span className="phone_number">0203.xxx.xxx</span></li>
            <li><BsInfoCircle /> About Us</li>
          </ul>
        </div>
        <div className='footer policies'>
          <h4>POLICIES</h4>
          <ul>
            <li>Warranty</li>
            <li>Shipping & Return</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className='footer social_media'>
          <h4>Social Media</h4>
          <ul>
            <li><BsFacebook size={20} /></li>
            <li><BsInstagram size={20} /></li>
            <li><BsTwitter size={20} /></li>
          </ul>
        </div>
      </div>
      <div className='footer_email'>
        <p>@Website made by me: khiemcan@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer