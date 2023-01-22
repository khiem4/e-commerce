import { Route, Routes, useMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import NavSearchBar from './components/Nav&Search_bar'
import Banner from './components/Banner'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Footer from './components/Footer'
import Products from './components/Products'
import Product from './components/Product'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchApi() {
      const response = await axios.get('https://dummyjson.com/products?limit=100')
      const products = response.data.products
      setProducts(products)
    }
    fetchApi()
  }, [])

  const match = useMatch('/products/:id')
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
                element={<Products products={products.filter(items =>
                  items.category === category)} />}
              />)
          }
        </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
