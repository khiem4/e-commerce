import { useEffect, useState } from 'react'
import Products from './Products'

const ProductsPage = ({ products, productCategory }) => {
  const [filter, setFilter] = useState([])
  const [toggle, setToggle] = useState('')

  useEffect(() => {
    setFilter(products)
    setToggle('')
  }, [products])

  const filterLowToHigh = () => {
    const sort = [...filter].sort((a, b) => a.price - b.price)
    setFilter(sort)
    setToggle('low_to_high')
  }

  const filterHighToLow = () => {
    const sort = [...filter].sort((a, b) => b.price - a.price)
    setFilter(sort)
    setToggle('high_to_low')
  }

  return (
    <>
      <div className='products_price_sort'>
        <button
          className={toggle === 'high_to_low' ? 'high_to_low' : ''}
          onClick={filterHighToLow}>Price: high to low</button>
        <button
          className={toggle === 'low_to_high' ? 'low_to_high' : ''}
          onClick={filterLowToHigh}>Price: low to high</button>
      </div>
      <Products products={filter} productCategory={productCategory} />
    </>
  )
}

export default ProductsPage