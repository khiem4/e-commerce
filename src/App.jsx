import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import CartPage from './components/CartPage'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Footer from './components/Footer'
import Product from './components/Product'
import ProductsPage from './components/ProductsPage'
import ScrollToTop from './components/ScrollToTop'
import { getAllProducts } from './reducers/productsReducer'
import { getAllProductsInCart } from './reducers/cartReducer'
import { isUserLogged } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllProductsInCart())
    dispatch(isUserLogged())
  }, [dispatch])

  const categories = [...new Set(products.map(product => product.category))]

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={
            !user
              ? <LoginForm />
              : <Navigate replace to='/' />}
        />
        <Route
          path='/register'
          element={<RegisterForm />}
        />
        <Route
          path='/cart'
          element={<CartPage />}
        />
        <Route path='/products'>
          <Route
            path='/products/all'
            element={<ProductsPage />}
          />
          <Route
            path=':id'
            element={<ProductsPage />}
          />
          {categories.map((category, index) =>
            <Route
              key={index}
              path={`${category}/:id`}
              element={<Product />}
            />
          )}
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
