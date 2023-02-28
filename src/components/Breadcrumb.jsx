import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation().pathname
  let currentLink = ''

  const crumb = location
    .split('/')
    .filter(crumb => crumb !== "")
    .map(crumb => {
      currentLink += `/${crumb}`
      return (
        <div className='crumb' key={crumb}>
          <Link to={currentLink}>
            <span>&gt;
              <p>{decodeURIComponent(crumb)}</p>
            </span>
          </Link>
        </div>
      )
    })

  return (
    <div className='bread_crumb'>
      <Link to={'/'}>Home page</Link>
      {crumb}
    </div>
  )
}

export default Breadcrumb