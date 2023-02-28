import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../reducers/cartReducer'
import { successMessage, removeMessage, errorMessage } from '../reducers/notificationReducer'

const AddToCart = ({ product, quantity, className, children }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  function addToCart() {
    if (!user) {
      dispatch(errorMessage('Sorry you need to login first'))
      return dispatch(removeMessage(5000))
    }

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