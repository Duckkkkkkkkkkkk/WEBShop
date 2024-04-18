import React from "react";
import Promoaction from "../components/promoaction/Promoaction";
import Brands from "../components/brands/Brands";
import Arrvals from "../components/arrivals/Arrvals";
import Sales from "../components/sales/Sales";
import Products from "../components/products/Products";
 
const Home = () => {
    return (
        <div className="Home">
            <Promoaction/>
            <Brands/>
            <Arrvals/>
            <Sales/>
            <Products/>
        </div>
    );
};
 
export default Home;