import { Link } from 'react-router-dom'
import { RxDropdownMenu } from 'react-icons/rx'
import { useSelector } from 'react-redux'

const Categories = () => {
  const products = useSelector(state => state.products)
  const categories = [...new Set(products.map(product => product.category))]

  return (
    <div className='categories'>
      <div>
        <span>Categories</span>
        <RxDropdownMenu size={20} />
      </div>
      <div className='drop_down_categories'>
        <ul>
          {categories.map((category, index) =>
            <li key={index}>
              <Link to={`/products/${category}`}>
                {category}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
export default Categories