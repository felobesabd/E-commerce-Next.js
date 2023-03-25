import React from "react";
import Image from "next/image";

export async function getStaticPaths() {

    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await res.json()
    const paths = data.map(product => {
        return {
            params: {id: product.id.toString()}
        }
    })
    return {
        paths, fallback: false
    }
}
export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch('https://api.escuelajs.co/api/v1/products/' + id)
    const product = await res.json()
    return {
        props: {product}
    }
}

const ProductDetails = ({ product })=> {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 mt-3'>
                    <Image src={product ? product.category.image : ''}
                           alt='Image Product' width='306' height='234'/>
                </div>
                <div className='col-lg-8 mt-3'>
                    <div>
                        <div className="row">
                            <div className="fw-bold fs-2">{product ? product.title : ''}</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-8">
                                <div className="cat-title d-inline">
                                    <div className="cat-rate d-inline">
                                        {product ? product.description : ''}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="cat-text">Specification :
                                 <span className='fw-bold ms-2'>{product ? product.category.name : ''}</span></div>
                        </div>
                        <div className="row mt-2">
                            <div className='col-md-10'>
                                <div className="product-description d-inline"></div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md12 md-d-flex md-justify-content-start">
                                <button className="btn btn-info d-inline px-3 py-3 border">{product ? product.price : ''} EGP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;