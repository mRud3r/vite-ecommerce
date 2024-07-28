import Product from './Product.jsx'
import productList from './productList.js'

export default function ProductPage () {



    return <>
    <div>
        <h1>All Products</h1>
        {productList.map((product, index) => <Product key={index} title={product.title} description={product.description} /> )}
    </div>
    </>
}