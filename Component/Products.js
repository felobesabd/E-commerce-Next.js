import React from "react";
import Image from "next/image";
import Link from "next/link";
const Products = ({ product })=> {
    const {id} = product

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mt-2'>
                <div
                    className="card my-2"
                    style={{
                        textAlign: 'center',
                        width: "100%",
                        height: "310px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                    }}>
                    <Link href={`product/${id}`}>
                        <div className="d-flex justify-content-center my-2">
                            <Image src={product ? product.category.image : ''} alt='Image Product' width='306'
                                   height='200' style={{borderRadius: '3px'}}/>
                        </div>
                    </Link>

                    <div className="card-body">
                            <div className="card-title mb-0">{product ? product.title : ''}</div>
                        <div className="card-text">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="d-flex align-items-baseline">
                                    <div className="card-price">{product ? product.price : ''}</div>
                                    <div className="card-currency mx-1">$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Products;