import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'

const Products = ({ products }) => {
  return (
    <div className='products_container'>
      <div className='row'>
        {products.map(product =>
          <div className='product_card' key={product.id} >
            <AddToCart
              className={'btn_hover_cart'}
              product={product}
              quantity={1}>
              <button className='btn_hover_cart'>
                <BsFillCartPlusFill size={20} />
              </button>
            </AddToCart>
            <img src={product.thumbnail} alt={product.title} />
            <div className='product_info'>
              <Link
                to={`/products/${product.id}`}>{product.title}
              </Link>
              <p>${product.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products