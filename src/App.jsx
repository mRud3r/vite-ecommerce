import ProductPage from "./components/ProductPage.jsx";
import Header from "./components/Header.jsx";
import Cart from "./components/Cart.jsx";

import { useState } from "react";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  }

  const handleCloseCart = () => {
    setIsCartOpen(false);
  }

  return (
    <>
    <Header onCartClick={handleCartClick} />
    <ProductPage />
    <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  )
}

export default App
