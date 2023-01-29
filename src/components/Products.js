import { useEffect } from 'react'
import { useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import productService from '../services/products'

const Products = ({ products }) => {
  const [cart, setCart] = useState([])
  console.log('cart:', cart)
  window.scrollTo({ top: 0, behavior: "smooth" })

  useEffect(() => {
    productService
      .getCart()
      .then(res => setCart(res))
  }, [])

  const addToCart = async (product) => {
    const item = {
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      quantity: 1,
    }

    const findProductInCart = cart.find(product =>
      product.title === item.title)

    if (findProductInCart) {
      const updateQuantity = {
        ...item,
        quantity: findProductInCart.quantity + 1,
        id: findProductInCart.id
      }

      const response = await productService.update(updateQuantity)
      const cartUpdated = cart.map(product =>
        product.id !== response.id ? product : response)

      return setCart(cartUpdated)
    }

    const response = await productService.post(item)
    setCart(cart.concat(response))
  }

  if (products.length === 0) {
    return <div style={{ display: 'none' }}></div>
  }

  return (
    <div className='products_container'>
      <div className='row'>
        {products.map(product =>
          <div className='product_card' key={product.id}>
            <div className='hover_cart'>
              <button onClick={() => addToCart(product)}>
                <BsFillCartPlusFill size={20} />
              </button>
            </div>
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