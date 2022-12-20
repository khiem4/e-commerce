import "../styles/product_card.css"

const ProductCard = ({ products }) => {
	const smartPhones = products.filter(item =>
		item.category === "smartphones")

	const laptops = products.filter(item =>
		item.category === "laptops")

	const watches = products.filter(item =>
		item.category === "mens-watches")

	return (
		<>
			<div className='products-container'>
				<div className='row'>
					<h2>Smart Phones</h2>
					<div className='products'>
						{smartPhones.map(item =>
							<div className='smartphones-product-card' key={item.id}>
								<img src={item.thumbnail} />
								<div className='product-name-price'>
									<a href="">{item.title}</a>
									<p>{item.price} $</p>
								</div>
								<div className='add-to-cart-dropdown'>
									<span>Add to cart</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className='products-container'>
				<div className='row'>
					<h2>Laptops</h2>
					<div className='products'>
						{laptops.map(item =>
							<div className='smartphones-product-card' key={item.id}>
								<img src={item.thumbnail} />
								<div className='product-name-price'>
									<a href="">{item.title}</a>
									<p>{item.price} $</p>
								</div>
								<div className='add-to-cart-dropdown'>
									<span>Add to cart</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className='products-container'>
				<div className='row'>
					<h2>Watches</h2>
					<div className='products'>
						{watches.map(item =>
							<div className='smartphones-product-card' key={item.id}>
								<img src={item.thumbnail} />
								<div className='product-name-price'>
									<a href="">{item.title}</a>
									<p>{item.price} $</p>
								</div>
								<div className='add-to-cart-dropdown'>
									<span>Add to cart</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductCard