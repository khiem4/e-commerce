import { useEffect, useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import AddToCart from './AddToCart'

function ProductsCard({ products }) {
  const [toggle, setToggle] = useState('')
  const [items, setItems] = useState([])
  const location = useLocation().pathname

  useEffect(() => {
    setItems(products)
  }, [products])

  const sortLowToHigh = () => {
    const sort = [...products].sort((a, b) => a.price - b.price)
    setItems(sort)
    setToggle('low_to_high')
  }

  const sortHighToLow = () => {
    const sort = [...products].sort((a, b) => b.price - a.price)
    setItems(sort)
    setToggle('high_to_low')
  }

  return (
    <>
      {location === '/'
        ? null
        : (
          <div className="products_price_sort">
            <button
              type="button"
              className={toggle === 'high_to_low' ? 'high_to_low' : ''}
              onClick={sortHighToLow}
            >
              Price: high to low
            </button>
            <button
              type="button"
              className={toggle === 'low_to_high' ? 'low_to_high' : ''}
              onClick={sortLowToHigh}
            >
              Price: low to high
            </button>
          </div>
        )}
      <ul className="row">
        {items.map((product) => (
          <li
            className="product_card"
            key={product.id}
          >
            <AddToCart
              className="btn_hover_cart"
              product={product}
              quantity={1}
            >
              <BsFillCartPlusFill size={20} />
            </AddToCart>
            <Link
              to={`/products/${product.category}/${product.title}`}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div className="products_info">
                <p>{product.title}</p>
                <div>
                  <span>
                    $
                    {Math.round(
                      product.price - ((product.price / 100) * product.discountPercentage),
                    )}
                  </span>
                  <span>
                    $
                    {product.price}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductsCard
