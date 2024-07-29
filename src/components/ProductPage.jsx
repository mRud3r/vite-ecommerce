import Product from './Product.jsx'
import productList from './productList.js'

export default function ProductPage () {



    return <>
    <div className='mt-20 flex flex-col items-center justify-center'>
        <h1>All Products</h1>
        <div className='grid grid-rows-4 gap-4'>
        {productList.map((product) => <Product key={product.id} title={product.title} description={product.description} /> )}
        </div>
    </div>
    </>
}