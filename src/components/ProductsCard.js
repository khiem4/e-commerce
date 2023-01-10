import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProductsCard = ({ products, productName }) => {
  return (
    <div>
      <div className='row'>
        <h2>{productName}</h2>
        <div className='products'>
          {products.map(item =>
            <div className='product_card' key={item.id}>
              <div className='hover_cart'>
                <button>
                  <BsFillCartPlusFill size={20} />
                </button>
              </div>
              <img src={item.thumbnail} />
              <div className='name_price'>
                <Link to={home => home`/${item.id}`} >{item.title}</Link>
                <p>{item.price} $</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsCard