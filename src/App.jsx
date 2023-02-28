import { Navigate, Route, Routes, useLocation, } from 'react-router-dom'
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
import Breadcrumb from './components/Breadcrumb'
import { getAllProducts } from './reducers/productsReducer'
import { getAllProductsInCart } from './reducers/cartReducer'
import { isUserLogged } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const location = useLocation().pathname

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllProductsInCart())
    dispatch(isUserLogged())
  }, [dispatch])

  return (
    <>
      <ScrollToTop />
      <Header />
      {location !== '/'
        ? <Breadcrumb />
        : null}
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
        <Route path='/products' >
          <Route
            index element={<ProductsPage />}
          />
          <Route
            path=':id'
            element={<ProductsPage />}
          />
          <Route
            path={`:id/:id`}
            element={<Product />}
          />
        </Route>
        <Route
          path='/cart'
          element={<CartPage />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
