const SortPrice = ({ sortLowToHigh, sortHighToLow, toggle }) => {
  return (
    <div className='products_price_sort'>
      <button
        className={toggle === 'high_to_low' ? 'high_to_low' : ''}
        onClick={sortHighToLow}>Price: high to low
      </button>
      <button
        className={toggle === 'low_to_high' ? 'low_to_high' : ''}
        onClick={sortLowToHigh}>Price: low to high
      </button>
    </div>
  )
}

export default SortPrice