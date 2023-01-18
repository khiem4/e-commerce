import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Products = ({ products, productCategory }) => {
  window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div className='products_container'>
      <div className='row'>
        <h2>
          {productCategory}
        </h2>
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
                <Link
                  to={`/product/${item.id}`}>{item.title}
                </Link>
                <p>${item.price}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products