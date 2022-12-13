import Header from './components/Header'
import { Router, Route, Link, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
  }, [])

  return (
    <div>
      <Header products={products} />
      <ProductCard products={products} />
      {/* <Router>
        <Link to="/">Processor</Link>
        <Link to="/">Graphics cards</Link>
        <Link to="/">Memory</Link>
        <Link to="/">Motherboards</Link>
        <Link to="/">Cases</Link>
        <Link to="/">Monitors</Link>

        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}


    </div >
  )
}

export default App
