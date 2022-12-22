import "../styles/product_card.css"
import { BsFillCartPlusFill } from 'react-icons/bs'

const ProductCard = ({ products }) => {
  const smartPhones = products.filter(item =>
    item.category === "smartphones")

  const laptops = products.filter(item =>
    item.category === "laptops")

  const watches = products.filter(item =>
    item.category === "mens-watches")

  return (
    <>
      <div className='products_container'>
        <div className='row'>
          <h2>Smart Phones</h2>
          <div className='products'>
            {smartPhones.map(item =>
              <div className='product_card' key={item.id}>
                <div className='thumbnail'>
                  <div className='hover_cart'>
                    <button>
                      <BsFillCartPlusFill size={20} />
                    </button>
                  </div>
                  <img src={item.thumbnail} />
                </div>
                <div className='name_price'>
                  <a href='#'>{item.title}</a>
                  <p>{item.price} $</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='products_container'>
        <div className='row'>
          <h2>Laptops</h2>
          <div className='products'>
            {laptops.map(item =>
              <div className='product_card' key={item.id}>
                <div className='thumbnail'>
                  <div className='hover_cart'>
                    <button>
                      <BsFillCartPlusFill size={20} />
                    </button>
                  </div>
                  <img src={item.thumbnail} />
                </div>
                <div className='name_price'>
                  <a href='#'>{item.title}</a>
                  <p>{item.price} $</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='products_container'>
        <div className='row'>
          <h2>Watches</h2>
          <div className='products'>
            {watches.map(item =>
              <div className='product_card' key={item.id}>
                <div className='thumbnail'>
                  <div className='hover_cart'>
                    <button>
                      <BsFillCartPlusFill size={20} />
                    </button>
                  </div>
                  <img src={item.thumbnail} />
                </div>
                <div className='name_price'>
                  <a href='#'>{item.title}</a>
                  <p>{item.price} $</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard