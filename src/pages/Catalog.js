import React from "react";
import Products from "../components/products/Products";
import Brands from "../components/brands/Brands";
import InfoBanner from "../components/infobanner/InfoBanner";
 
const Catalog = () => {
    return (
        <div>
            <Brands />
            <Products />
            <InfoBanner />
        </div>
    );
};
 
export default Catalog;