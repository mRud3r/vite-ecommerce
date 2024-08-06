import React from 'react';

export default function Product({ product, addToCart }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="h-40 w-full bg-slate-400 mb-4 rounded-t-lg"></div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="text-xl font-semibold text-gray-900 mb-4">${product.price}</p>
        <button 
          className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-amber-600 transition duration-300"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}