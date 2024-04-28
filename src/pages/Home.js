import React from "react";
import Promoaction from "../components/promoaction/Promoaction";
import Brands from "../components/brands/Brands";
import Arrvals from "../components/arrivals/Arrvals";
import Sales from "../components/sales/Sales";
 
const Home = () => {
    return (
        <div className="Home">
            <Promoaction/>
            <Brands/>
            <Arrvals/>
            <Sales/>
        </div>
    );
};
 
export default Home;