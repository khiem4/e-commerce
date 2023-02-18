import { useSelector } from 'react-redux'
import Banner from './Banner'
import ProductsCard from './ProductsCard'

const HomePage = () => {
  const products = useSelector(state => state.products)
  const productsHighDiscount = products.filter(product => product.discountPercentage > 15)
  console.log('productsHighDiscount:', productsHighDiscount)

  const productsHighRating = products.filter(product => product.rating > 4.9)
  console.log('productsHighRating:', productsHighRating)

  return (
    <div>
      <Banner />
      {/* <h2>High Discount Products</h2> */}
      {/* <ProductsCard products={productsHighDiscount} /> */}
      <h2>High Rating Products</h2>
      <ProductsCard products={productsHighRating} />
    </div>
  )
}

export default HomePage