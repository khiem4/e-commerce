import { useEffect, useState } from 'react'
import productService from '../services/products'

const AddToCart = (props) => {
  const { product, quantity } = props
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchCart = async () => {
      const response = await productService.getCart()
      setCart(response)
    }
    fetchCart()
  }, [])

  async function addToCart() {
    const item = {
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      quantity,
    }
    const findProductInCart = cart.find(product =>
      product.title === item.title)

    if (findProductInCart) {
      const updateQuantity = {
        ...item,
        quantity: findProductInCart.quantity + quantity,
        id: findProductInCart.id
      }

      const response = await productService.update(updateQuantity)
      const cartUpdated = cart.map(product =>
        product.title !== response.title ? product : response)

      return setCart(cartUpdated)
    }
    const response = await productService.post(item)
    return setCart(cart.concat(response))
  }

  return (
    <button
      className='btn-w-fit-content'
      onClick={addToCart}>
      {props.children}
    </button>
  )
}

export default AddToCart