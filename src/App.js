import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import NavSearchBar from './components/Nav&Search_bar'
import Banner from './components/Banner'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Footer from './components/Footer'
import Products from './components/Products'
import ProductsPage from './components/ProductsPage'


const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=100')
      .then(response => setProducts(response.data.products))
  }, [])


  const smartPhones = products.filter(item =>
    item.category === "smartphones")

  const laptops = products.filter(item =>
    item.category === "laptops")

  const watches = products.filter(item =>
    item.category === "mens-watches")

  const decoration = products.filter(item =>
    item.category === "home-decoration")

  const furniture = products.filter(item =>
    item.category === "furniture")

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavSearchBar />
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <div className='multiple_products_container'>
                <Products products={smartPhones} productCategory={'Smart Phones'} />
                <Products products={laptops} productCategory={'Laptop'} />
                <Products products={watches} productCategory={'Watches'} />
              </div>
            </>
          } />
          <Route path='/smartphones'
            element={<ProductsPage products={smartPhones} productCategory={'Smart Phones'} />} />
          <Route path='/laptop'
            element={<ProductsPage products={laptops} productCategory={'Laptop'} />} />
          <Route path='/watches'
            element={<ProductsPage products={watches} productCategory={'Watches'} />} />
          <Route path='/decoration'
            element={<ProductsPage products={decoration} productCategory={'Decoration'} />} />
          <Route path='/furniture'
            element={<ProductsPage products={furniture} productCategory={'Furniture'} />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
