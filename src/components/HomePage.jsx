import { useRef, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Banner from './Banner'
import ProductsContainer from './ProductsContainer'

const HomePage = () => {
  const products = useSelector(state => state.products)
  const [firstIndex, setCurrentIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(5)
  const [sliderName, setSliderName] = useState('products_slider')

  const productsHighDiscount = products.filter(product =>
    product.discountPercentage > 17)

  const productSlider = productsHighDiscount.slice(firstIndex, lastIndex)

  function handleNextClick() {
    if (lastIndex >= productsHighDiscount.length) {
      return null
    }
    setCurrentIndex(firstIndex + 1)
    setLastIndex(lastIndex + 1)
    setSliderName('products_slider')
  }

  function handlePrevClick() {
    if (firstIndex === 0) {
      return null
    }
    setCurrentIndex(firstIndex - 1)
    setLastIndex(lastIndex - 1)
    setSliderName('prev_items')
  }

  const nextBtnStyle = lastIndex === productsHighDiscount.length
    ? { opacity: 0.5 }
    : null

  const preBtnStyle = firstIndex === 0
    ? { opacity: 0.5 }
    : null

  return (
    <>
      <Banner />
      <div className='home_page_products_container'>
        <h3>Most Popular Products</h3>
        <div className={sliderName}>
          <ProductsContainer products={productSlider} />
          <div className='slider_button'>
            <button
              style={preBtnStyle}
              onClick={handlePrevClick}>
              <AiOutlineArrowLeft />
            </button>
            <button
              style={nextBtnStyle}
              onClick={handleNextClick}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage