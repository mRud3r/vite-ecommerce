export default function CartItem( {item, onAdd, onRemove} ) {
    return (<>
    <div>
        <h4>{item.title}</h4>
        <p>{item.quantity}`</p>
        <button onClick={() => onAdd(item)} >+</button>
        <button onClick={() => onRemove(item.id)}>-</button>
    </div>

    </>);
}