import Navbar from "../components/Navbar";
import React from "react";

const Index = () => {
    return(<>
    <Navbar/>
    <div className="center">
        <h1>Добро пожаловать!</h1>
        <h3>Здесь только лучшие треки!</h3>
    </div>
    <style jsx>
        {
            `.center{
                margin-top: 150px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: cnter;
            }`
        }    
    </style>    
    </>)
}
export default Index;