import React from "react";
import Promoaction from "../components/promoaction/Promoaction";
import Brands from "../components/brands/Brands";
import Arrvals from "../components/arrivals/Arrvals";
import Sales from "../components/sales/Sales";
import Footer from "../components/footer/Footer";
 
const Home = () => {
    return (
        <>
            <Promoaction/>
            <Brands/>
            <Arrvals/>
            <Sales/>
            <Footer/>
        </>
    );
};
 
export default Home;