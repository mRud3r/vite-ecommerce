import React, { useState } from "react";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import productList from "./components/productList";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (product) => {
    setCartItems(prevCartItems => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[product.id]) {
        newCartItems[product.id].quantity += 1;
      } else {
        newCartItems[product.id] = { ...product, quantity: 1 };
      }
      return newCartItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevCartItems => {
      const newCartItems = { ...prevCartItems };
      if (newCartItems[productId].quantity > 1) {
        newCartItems[productId].quantity -= 1;
      } else {
        delete newCartItems[productId];
      }
      return newCartItems;
    });
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Header onCartClick={handleCartClick} />
      <ProductPage products={productList} addToCart={addToCart} />
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />
    </>
  );
}

export default App;
