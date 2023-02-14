import { Route, Routes, useMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Footer from './components/Footer'
import Product from './components/Product'
import Cart from './components/Cart'
import productService from './services/products'
import ProductsPage from './components/ProductsPage'
import ScrollToTop from './components/ScrollToTop'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsInCart } from './reducers/cartReducer'

const App = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const match = useMatch('/products/:id')

  useEffect(() => {
    async function fetchProducts() {
      const response = await productService.getAll()
      setProducts(response)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
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
            element={<ProductsPage products={products} categories={categories} />}
          />
          <Route
            path=':id'
            element={<Product product={product} products={products} />}
          />
          {
            categories.map((category, index) =>
              <Route
                key={index}
                path={category}
                element={
                  <ProductsPage
                    products={products.filter(items =>
                      items.category === category)}
                    categories={categories} />} />)
          }
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
