import { IconContext } from "react-icons";
import { FaShippingFast } from 'react-icons/fa'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { TbShoppingCartDiscount } from 'react-icons/tb'
import { IoTicketSharp } from 'react-icons/io5'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner_images'>
        <img src={require('../images/banner-2.jpg')} alt="banner" />
        <img src={require('../images/sale-1.jpg')} alt="banner" />
        <img src={require('../images/sale-2.jpg')} alt="banner" />
      </div>
      <div className='banner_policies'>
        <IconContext.Provider value={{ color: "red", className: "global_class_name" }}>
          <div className="policy">
            <FaShippingFast size={40} />
            <p>
              Free ship <br />In 10km radius
            </p>
          </div>
          <div className="policy">
            <TbShoppingCartDiscount size={40} />
            <p>Membership Sales</p>
          </div>
          <div className="policy">
            <IoTicketSharp size={40} />
            <p>Voucher </p>
          </div>
          <div className="policy">
            <MdOutlineSupportAgent size={40} />
            <p>24/7 Online Support</p>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Banner