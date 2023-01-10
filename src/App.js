import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import NavSearchBar from './components/Nav&Search_bar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProductsCard from './components/ProductsCard'


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
              <div className='products_container'>
                <ProductsCard products={smartPhones} productName={'Smart Phones'} />
                <ProductsCard products={laptops} productName={'Laptop'} />
                <ProductsCard products={watches} productName={'Watches'} />
              </div>
            </>
          } />
          <Route path='/smartphones'
            element={<ProductsCard products={smartPhones} productName={'Smart Phones'} />} />
          <Route path='/laptop'
            element={<ProductsCard products={laptops} productName={'Laptop'} />} />
          <Route path='/watches'
            element={<ProductsCard products={watches} productName={'Watches'} />} />
          <Route path='/decoration'
            element={<ProductsCard products={decoration} productName={'Decoration'} />} />
          <Route path='/furniture'
            element={<ProductsCard products={furniture} productName={'Furniture'} />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
