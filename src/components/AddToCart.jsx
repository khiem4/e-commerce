import { useDispatch } from 'react-redux'
import { addProductToCart } from '../reducers/cartReducer'
import { successMessage, removeMessage } from '../reducers/notificationReducer'

const AddToCart = ({ product, quantity, className, children }) => {
  const dispatch = useDispatch()

  function addToCart() {
    dispatch(addProductToCart(product, quantity))

    dispatch(successMessage(`Product has been added to cart`))
    dispatch(removeMessage(2000))
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