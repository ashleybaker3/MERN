import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-3">
            {props.products.map( (product, i) =>
                <div>
                    <Link to={`/products/${product._id}`}>
                        <h3 key={i}>{product.title}</h3>                    
                    </Link>
                </div>
                )}
        </div>
    )
}

export default ProductList;