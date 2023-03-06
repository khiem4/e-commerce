import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation().pathname
  let currentLink = ''

  const crumb = location
    .split('/')
    .filter((name) => name !== '')
    .map((name) => {
      currentLink += `/${name}`
      return (
        <div key={name}>
          <Link to={currentLink}>
            <span>
              &gt;
              <p>{decodeURIComponent(name)}</p>
            </span>
          </Link>
        </div>
      )
    })

  return (
    <div className="bread_crumb">
      <Link to="/">Home page</Link>
      {crumb}
    </div>
  )
}

export default Breadcrumb
