import { Route, Routes, useMatch } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Footer from './components/Footer'
import Product from './components/Product'
import Cart from './components/Cart'
import ProductsPage from './components/ProductsPage'
import ScrollToTop from './components/ScrollToTop'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsInCart } from './reducers/cartReducer'
import { getAllProducts } from './reducers/productsReducer'

const App = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const match = useMatch('/products/:id/:id')

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllProductsInCart())
  }, [dispatch])

  const product = match
    ? products.find(item => item.id === Number(match.params.id))
    : null

  const categories = [...new Set(products.map(product => product.category))]

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/products'>
          <Route
            path='/products/all'
            element={<ProductsPage />}
          />
          <Route
            path=':id'
            element={<ProductsPage />}
          />
          {
            categories.map((category, index) =>
              <Route
                key={index}
                path={`${category}/:id`}
                element={<Product product={product} />}
              />)}
        </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
