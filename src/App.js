import { Route, Routes, useMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import NavSearchBar from './components/Nav&Search_bar'
import Banner from './components/Banner'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Footer from './components/Footer'
import Products from './components/Products'
import Product from './components/Product'
import Cart from './components/Cart'
import productService from './services/products'
import ProductsList from './components/ProductsList'

const App = () => {
  const [products, setProducts] = useState([])
  const match = useMatch('/products/:id')

  useEffect(() => {
    productService
      .getAll()
      .then(products => setProducts(products))
  }, [])

  const product = match
    ? products.find(item => item.id === Number(match.params.id))
    : null

  const categoriesFilter = [...new Set(products.map(product => product.category))]

  return (
    <>
      <Header />
      <NavSearchBar products={products} categories={categoriesFilter} />
      <Routes>
        <Route path='/' element={
          <>
            <Banner />
            <div className='multiple_products_container'>
            </div>
          </>}
        />
        <Route path='/products'>
          <Route path='search' />
          <Route path=':id' element={<Product product={product} />} />
          {
            categoriesFilter.map((category, index) =>
              <Route
                key={index}
                path={category}
                element={<ProductsList products={products.filter(items =>
                  items.category === category)} />}
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
