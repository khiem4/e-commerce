import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortProductsPrice } from '../reducers/productsReducer'

const SortPrice = ({ products }) => {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState('')

  const sortLowToHigh = () => {
    dispatch(sortProductsPrice(products, 'lowToHigh'))
    setToggle('low_to_high')
  }

  const sortHighToLow = () => {
    dispatch(sortProductsPrice(products, 'highToLow'))
    setToggle('high_to_low')
  }

  return (
    <div className='products_price_sort'>
      <button
        className={toggle === 'high_to_low' ? 'high_to_low' : ''}
        onClick={sortHighToLow}>Price: high to low
      </button>
      <button
        className={toggle === 'low_to_high' ? 'low_to_high' : ''}
        onClick={sortLowToHigh}>Price: low to high
      </button>
    </div>
  )
}

export default SortPrice