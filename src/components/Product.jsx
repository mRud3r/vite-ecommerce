import React from 'react';

export default function Product({ product, title, description, addToCart }) {
  return (
    <div className={cardStyle}>
      <div className="h-40 w-40 bg-slate-400 mb-4 rounded-sm"></div>
      <div>
        <h3 className={cardTitle}>{title}</h3>
        <p className={cardDescription}>{description}</p>
        <button className={addToCartBtn} onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

const cardStyle = 'inline-block border rounded-md border-black p-3';

const cardTitle = 'font-bold text-lg mb-2';

const cardDescription = 'text-sm';

const addToCartBtn = 'p-1 px-2 bg-amber-400 rounded-lg';