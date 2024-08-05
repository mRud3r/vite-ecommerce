export default function CartItem( {item, onAdd, onRemove} ) {
    return (<>
    <div className={ItemCard}>
        <div className="size-20 bg-indigo-400"></div>
        <div className={itemText}>
        <h4>{item.title}</h4>
        <p>number: {item.quantity}</p>
        <button onClick={() => onAdd(item)} >+</button>
        <button onClick={() => onRemove(item.id)}>-</button>
        </div>
    </div>

    </>);
}

const ItemCard = 'flex flex-row gap-5 p-2 border-2 border-black mt-1';

const itemText = '';