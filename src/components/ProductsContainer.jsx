import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'

const ProductsContainer = ({ products }) => {
  return (
    <ul className='row'>
      {products.map(product =>
        <li
          className='product_card'
          key={product.id} >
          <AddToCart
            className={'btn_hover_cart'}
            product={product}
            quantity={1}>
            <BsFillCartPlusFill size={20} />
          </AddToCart>
          <Link
            to={`/products/${product.category}/${product.title}`}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <div className='products_info'>
              <p>{product.title}</p>
              <div>
                <span>${Math.round(
                  product.price - (product.price / 100 * product.discountPercentage))}
                </span>
                <span>${product.price}</span>
              </div>
            </div>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default ProductsContainer