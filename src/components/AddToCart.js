import { useDispatch } from 'react-redux'
import { addProductToCart } from '../reducers/cartReducer'
import { messageNotify } from '../reducers/notificationReducer'

const AddToCart = ({ product, quantity, className, children }) => {
  const dispatch = useDispatch()

  function addToCart() {
    dispatch(addProductToCart(product, quantity))
    dispatch(messageNotify(`product has been added to cart`))
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