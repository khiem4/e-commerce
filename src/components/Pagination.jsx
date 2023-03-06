function Pagination({ productsPerPage, totalProducts, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          type="button"
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  )
}

export default Pagination
