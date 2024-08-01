import CartItem from "./CartItem.jsx";

export default function Cart({isOpen, onClose, cartItems, removeFromCart, addToCart }) {

  const cartArray = Object.values(cartItems);

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}>
            <button onClick={onClose} >close</button>
            <ul>
        {cartArray.map((item, index) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} onAdd={addToCart} />
        ))}
      </ul>
        </div>
    );
}