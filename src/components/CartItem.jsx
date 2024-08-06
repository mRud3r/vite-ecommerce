export default function CartItem({ item, onAdd, onRemove }) {
    return (
        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded shadow-sm bg-white">
            <div className="w-16 h-16 bg-indigo-400 rounded-md flex-shrink-0"></div>
            <div className="flex flex-col flex-grow">
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <div className="flex gap-2 mt-2">
                    <button 
                        onClick={() => onAdd(item)} 
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                    >
                        +
                    </button>
                    <button 
                        onClick={() => onRemove(item.id)} 
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}