import { Link } from 'react-router-dom'
import { RxDropdownMenu } from 'react-icons/rx'

const Categories = ({ categories }) => {
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
                <div>{category}</div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
export default Categories