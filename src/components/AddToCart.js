import { useContext } from 'react'
import CartContext from '../context/CartContext'

const AddToCart = ({ product, quantity, className, children }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <button
      className={className}
      onClick={() => addToCart(product, quantity)}>
      {children}
    </button>
  )
}

export default AddToCart