import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, updateProductQuantity } from '../reducers/cartReducer'

const AddToCart = ({ product, quantity, className, children }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

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
      if (findProductInCart.quantity === 1 && quantity === -1) {
        return null
      }

      const productUpdated = {
        ...item,
        quantity: findProductInCart.quantity + quantity,
        id: findProductInCart.id
      }
      return dispatch(updateProductQuantity(productUpdated))
    }

    return dispatch(addProductToCart(item))
  }

  return (
    <button
      className={className}
      onClick={addToCart}>
      {children}
    </button>
  )
}

export default AddToCart