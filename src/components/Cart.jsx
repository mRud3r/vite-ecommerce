export default function Cart({isOpen, onClose}) {
    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}>
            <button onClick={onClose} >close</button>
        </div>
    );
}