import "./product-card.css"

const ProductCard = ({ products }) => {
  const smartPhones = products.filter(item =>
    item.category === "smartphones")

  const laptops = products.filter(item =>
    item.category === "laptops")


  return (
    <div className='main'>
      <h2>Smart Phones</h2>
      <div className='product-container smartphones'>
        {smartPhones.map(item =>
          <div className='product-card' key={item.id}>
            <img className='product-thumbnail' src={item.images[0]} />
            {item.title} {item.price}
          </div>
        )}
      </div>

      {/* <div className='product-container laptops'>
        <h2>Laptops</h2>
        {laptops.map(item =>
          <div className='product-card' key={item.id}>
            <img className='product-thumbnail' src={item.images[0]} />
            {item.title} {item.price}
          </div>
        )}
      </div> */}
    </div>
  )
}

export default ProductCard