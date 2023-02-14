import { useDispatch } from 'react-redux'
import { addProductToCart } from '../reducers/cartReducer'
import { messageNotify, removeMessage } from '../reducers/notificationReducer'

const AddToCart = ({ product, quantity, className, children }) => {
  const dispatch = useDispatch()

  function addToCart() {
    dispatch(addProductToCart(product, quantity))

    dispatch(messageNotify(`Product has been added to cart`))
    setTimeout(() => {
      dispatch(removeMessage())
    }, 3000)
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