import React, { useState } from "react";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import productList from "./components/productList";

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  }

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
      <Header onCartClick={handleCartClick} onCategoryClick={handleCategoryChange} />
      <ProductPage products={productList} addToCart={addToCart} category={currentCategory} />
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />
    </>
  );
}

export default App;
