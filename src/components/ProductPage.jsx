import React from 'react';
import Product from './Product';

export default function ProductPage({ products, addToCart }) {
  return (
    <div className="w-full mt-32 flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold mb-10">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <Product 
            key={product.id} 
            product={product} 
            addToCart={() => addToCart(product)} 
          />
        ))}
      </div>
    </div>
  );
}