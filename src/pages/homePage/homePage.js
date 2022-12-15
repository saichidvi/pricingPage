import React from "react";
import "./homePage.css";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import Data from "../../data/data";


const HomePage = () => {
    const data = Data;
    return( 
        <div>
            <Navbar></Navbar>
            <div className="container">
               {data.map((item,index) => {
                return(
                    <div className="comp">
                       <Card item={item} key={index}></Card>
                    </div>
                );
               })};
            </div>
        </div>
    );
};


export default HomePage;