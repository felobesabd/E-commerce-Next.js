import React from "react";
import Products from "../Component/Products";

export async function getStaticProps() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const products = await res.json()
    return {
        props: {products}
    }
}
const Index = ({ products })=> {
  return (
    <main>
        <div className='container'>
            <div className='row'>
                {
                    products.map((product) => {
                        return (
                            <Products key={product.id} product={product}/>
                        )
                    })
                }
            </div>
        </div>
    </main>
  )
}

export default Index;
