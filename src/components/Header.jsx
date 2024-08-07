export default function Header({ onCartClick, onCategoryClick }) {
	return (
		<header className="fixed top-0 w-full bg-white shadow-lg border-b-2 border-gray-200 z-50">
			<div className="container mx-auto flex items-center justify-between p-4">
				<h1 className="text-2xl font-bold text-gray-800">Shopix</h1>
				<nav id="links" className="flex items-center gap-8">
                <button
						onClick={() => onCategoryClick(null)}
						className="text-lg">
						Home
					</button>
					<button
						onClick={() => onCategoryClick("men")}
						className="text-lg">
						Men
					</button>
					<button
						onClick={() => onCategoryClick("women")}
						className="text-lg">
						Women
					</button>
					<button
						onClick={() => onCategoryClick("kids")}
						className="text-lg">
						Kids
					</button>
					
				</nav>
				<button
					onClick={onCartClick}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
					CART
				</button>
			</div>
		</header>
	);
}
