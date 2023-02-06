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

const App = () => {
  const [products, setProducts] = useState([])
  const match = useMatch('/products/:id')

  useEffect(() => {
    async function fetchProducts() {
      const response = await productService.getAll()
      setProducts(response)
    }
    fetchProducts()
  }, [])

  const product = match
    ? products.find(item => item.id === Number(match.params.id))
    : null

  const productCategories = [...new Set(products.map(product => product.category))]

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/products'>
          <Route
            path='/products'
            element={<ProductsPage products={products} categories={productCategories} />}
          />
          <Route
            path=':id'
            element={<Product product={product} />}
          />
          {productCategories.map((category, index) =>
            <Route
              key={index}
              path={category}
              element={
                <ProductsPage
                  products={products.filter(items =>
                    items.category === category)}
                  categories={productCategories} />}
            />)
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
