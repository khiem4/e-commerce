import { useEffect, useState } from 'react'

function Pagination({ paginate, setProductsPerPage, currentPage }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    if (screenWidth <= 1000) {
      setProductsPerPage(16)
    }
    if (screenWidth <= 800) {
      setProductsPerPage(18)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenWidth])

  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => paginate(
          currentPage !== 1
            ? currentPage - 1
            : currentPage,
        )}
      >
        Prev
      </button>
      <button
        type="button"
        onClick={() => paginate(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
