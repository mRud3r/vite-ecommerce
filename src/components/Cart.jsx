import CartItem from "./CartItem.jsx";

export default function Cart({ isOpen, onClose, cartItems, removeFromCart, addToCart }) {

  const cartArray = Object.values(cartItems);

  const totalPrice = cartArray.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className={`fixed top-0 right-0 w-80 bg-white shadow-lg transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } transition-transform duration-300 ease-in-out z-50`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      {cartArray.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          <h3>No items in the cart!</h3>
        </div>
      ) : (
        <>
          <ul className="p-4 overflow-y-auto space-y-4">
            {cartArray.map((item) => (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} onAdd={addToCart} />
            ))}
          </ul>
          <div className="p-4 border-t">
            <h3 className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</h3>
            <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}