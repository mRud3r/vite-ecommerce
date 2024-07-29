export default function Header( {onCartClick} ) {
    return (
        <header className="fixed top-0 w-full flex items-center justify-between p-2 border-b-4 border-black">
            <h1 className="text-xl font-bold">Logo.</h1>
            <div id="links" className="flex itmems-center justify-between gap-4">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Features</a>
                    <a href="">Contact</a>
            </div>
            <button onClick={onCartClick}>CART</button>
        </header>
    );
}