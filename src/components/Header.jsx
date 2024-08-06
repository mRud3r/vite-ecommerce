export default function Header({ onCartClick }) {
    return (
        <header className="fixed top-0 w-full bg-white shadow-lg border-b-2 border-gray-200 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                <h1 className="text-2xl font-bold text-gray-800">Logo</h1>
                <nav id="links" className="flex items-center gap-8">
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Features</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">Contact</a>
                </nav>
                <button 
                    onClick={onCartClick} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                    CART
                </button>
            </div>
        </header>
    );
}