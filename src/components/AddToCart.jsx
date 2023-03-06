import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductToCart } from '../reducers/cartReducer'
import { successMessage, errorMessage } from '../reducers/notificationReducer'

function AddToCart({
  product, quantity, className, children,
}) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  function addToCart() {
    if (!user) {
      navigate('/login')
      return dispatch(errorMessage('Sorry you need to login first', 4000))
    }

    dispatch(addProductToCart(product, quantity))
    return dispatch(successMessage('Product has been added to cart', 2000))
  }

  return (
    <button
      type="button"
      className={className}
      onClick={addToCart}
    >
      {children}
    </button>
  )
}

export default AddToCart
