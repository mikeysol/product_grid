import React from "react";
import * as PropTypes from "prop-types";

const ProductGrid = (props) => {


    return props.products.map(prod => {
        if (prod.contents != null && isNaN(prod.position) && prod.position.includes("row")) {
            return <div className="cont-item">
                {prod.contents}
            </div>
        } else if (prod.contents != null) {
            return <div className="item">
                {prod.contents}
            </div>
        } else {
            return <div className="item">
                <div>{prod.product_id}</div>
                <div>{prod.title}</div>
                <img src={prod.image} alt={prod.image}/>
                <div>
                    <a href={prod.url} target={"_blank"} rel="noopener noreferrer">{prod.url}</a>
                </div>
            </div>
        }
    })
}

ProductGrid.propTypes = {
    products: PropTypes.array
};

export default ProductGrid;