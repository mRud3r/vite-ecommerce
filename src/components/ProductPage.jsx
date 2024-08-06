import React from 'react';
import Product from './Product';

export default function ProductPage({ products, addToCart }) {
  return (
    <div className={pageStyle}>
      <h1 className={pageHeading}>All Products</h1>
      <div className={productGrid}>
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
const productGrid = 'grid grid-cols-6 gap-4';

const pageStyle = ' w-full mt-32 flex flex-col items-center justify-center gap-10';

const pageHeading = 'text-3xl font-bold';