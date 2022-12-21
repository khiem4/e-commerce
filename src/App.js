import Header from './components/Header'
import { Router, Route, Link, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import NavSearchBar from './components/Nav&Search_bar'
import Categories from './components/Categories'
import Banner from './components/Banner'
import Footer from './components/Footer'


const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=100')
      .then(response => setProducts(response.data.products))
  }, [])

  return (
    <>
      <Header />
      <NavSearchBar />
      <Categories products={products} />
      <Banner />
      <ProductCard products={products} />
      <Footer />
    </>
  )
}

export default App
