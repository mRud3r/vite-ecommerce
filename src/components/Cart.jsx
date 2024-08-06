import CartItem from "./CartItem.jsx";

export default function Cart({isOpen, onClose, cartItems, removeFromCart, addToCart }) {

  const cartArray = Object.values(cartItems);

  const totalPrice = cartArray.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}>
            <button onClick={onClose} >close</button>
            <ul>
        {cartArray.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} onAdd={addToCart} />
        ))}
      </ul>
      <div className="p-4 border-t">
        <h3>Total Price: ${totalPrice}</h3>
      </div>
        </div>
    );
}