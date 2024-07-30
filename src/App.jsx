import React, { useState } from "react";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import productList from "./components/productList";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
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
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} />
    </>
  );
}

export default App;
