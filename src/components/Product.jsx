import React from 'react';

export default function Product({ product, title, description, addToCart }) {
  return (
    <div className="inline-block border border-black p-3">
      <div className="h-40 w-40 bg-slate-400 mb-4"></div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}