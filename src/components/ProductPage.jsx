import React from 'react';
import Product from './Product';

export default function ProductPage({ products, addToCart, category }) {
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div className="w-full mt-32 flex flex-col items-center px-4 min-h-screen ">
      <h1 className="text-4xl font-bold mb-10">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}'s Products` : 'All Products'}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {filteredProducts.map((product) => (
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
