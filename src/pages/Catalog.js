import React from "react";
import Products from "../components/products/Products";
import Brands from "../components/brands/Brands";
 
const Catalog = () => {
    return (
        <div>
            <Brands/>
            <Products/>
        </div>
    );
};
 
export default Catalog;