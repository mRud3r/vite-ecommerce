import React from 'react';
import Product from './Product';

export default function ProductPage({ products, addToCart }) {
  return (
    <div className='mt-20 flex flex-col items-center justify-center'>
      <h1>All Products</h1>
      <div className='grid grid-rows-4 gap-4'>
        {products.map((product) => (
          <Product 
            key={product.id} 
            product={product} 
            title={product.title} 
            description={product.description} 
            addToCart={() => addToCart(product)} 
          />
        ))}
      </div>
    </div>
  );
}