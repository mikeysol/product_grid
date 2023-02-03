import React from "react";
import {getContent} from "../apis/contents";
import {getProducts} from "../apis/products";
import "./ContentContainer.css";
import ProductGrid from "./ProductGrid/ProductGrid";

const ContentContainer = () => {
    const getContentContainerData = () => {
        let contents = getContent(0);
        contents = contents.data && contents.data.length > 0 ? contents.data : [];
        contents = contents.map(cont => {
            if (cont.type === 'html') {
                let tag = cont.contents.match(/(?<=\<)(.*?)(?=\>)/m)[0];
                let tagContent = cont.contents.match(/(?<=\>)(.*?)(?=\<)/m)[0];
                cont.contents = React.createElement(tag,null, tagContent);
            }
            return cont
        })
        let products = getProducts(0);
        products = products.products && products.products.length > 0 ? products.products : [];
        contents = contents.filter(cont => {
            if (typeof cont.position === 'number') {
                products.splice(cont.position - 1 , 0, cont);
                return false;
            }
            return true;
        })
        contents.sort((cont1, cont2) => parseInt(cont1.position.replace("row-", "")) > parseInt(cont2.position.replace("row-", "")) ? 1 : -1)


        contents.forEach((cont, idx) => {
            products.splice(parseInt(cont.position.replace("row-", "")) - 1, 0, cont);
        })

        return products
    }

    let contentContainerData = getContentContainerData();
    return (
        <div className="grid">
            {<ProductGrid products={contentContainerData}/>}
        </div>
    );
}

export default ContentContainer;