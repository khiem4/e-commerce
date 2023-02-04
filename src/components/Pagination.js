import { BsWindowSidebar } from 'react-icons/bs'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  window.scrollTo({ top: 100, behavior: 'smooth' })

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='pagination'>
      {pageNumbers.map(number =>
        <button onClick={() => paginate(number)}>{number}</button>
      )}
    </div>
  )
}


export default Pagination