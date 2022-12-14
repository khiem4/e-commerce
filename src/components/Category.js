import './Category.css'

const Category = ({ products }) => {

  const smartPhones = products.filter(item =>
    item.category === "smartphones")

  return (
    <div className='categories-container'>
      <div className='categories-background'>
        <div className="categories">
          <div className='category-items'>
            <img
              src={'https://i.dummyjson.com/data/products/4/2.jpg'}
              alt="smart phones" />
            <a href="#">Smart Phones</a>
          </div>
          <div className='category-items'>
            <img
              src={'https://i.dummyjson.com/data/products/6/2.jpg'}
              alt="laptops" />
            <a href="">Laptops</a>
          </div>
          <div className='category-items'>
            <img
              src={'https://i.dummyjson.com/data/products/29/1.jpg'}
              alt="home decoration" />
            <a href="">Home Decoration</a>
          </div>
          <div className='category-items'>
            <img
              src={'https://i.dummyjson.com/data/products/35/thumbnail.jpg'}
              alt="furniture" />
            <a href="">Furniture</a>
          </div>
          <div className='category-items'>
            <img
              src={'https://i.dummyjson.com/data/products/63/1.jpg'}
              alt="watches" />
            <a href="">Watches</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category