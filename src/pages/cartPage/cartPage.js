import React, { useEffect, useState } from "react";
import "./cartPage.css";
import Navbar from "../../components/navbar/navbar";
import { useLocation } from "react-router-dom";


const CartPage = () => {
    const location = useLocation();
    const [paymentDone,setPaymentDone] = useState(false);
    const [cartStatus,setCartStatus] = useState(false);
    const state = location.state;
    console.log({paymentDone : paymentDone});
    useEffect(() => {
        if(state !== undefined){
            setCartStatus(true);
        }
    },[state])
    return(
        <div>
            <Navbar></Navbar>
            {cartStatus ? <>{(paymentDone === true) ? <div className="cartContainer">
                 <div className="cartCard">
                    <h1 className="thankHead">Thank You </h1>
                    <h1 className="thankHead">Your Payment is Successful !</h1>
                 </div>
            </div>  : <div className="cartContainer">
              <div className="cartCard">
                <h1 className="cartHead">Your Cart</h1>
                <h1 className="planHead">Your Plan : {state?.plan}</h1>
                <h1 className="planHead">Plan Costs : ${state?.cost} </h1>
                <div className="btnsdiv">
                   <button className="cartBtn" onClick={() => setCartStatus(false)}>Remove</button>
                   <button className="cartBtn" onClick={() => setPaymentDone(true)}>Buy</button>
                </div>
              </div>
            </div>}
            </> :<div className="cartContainer">
                <div className="cartCard">
                    <h1 className="thankHead">Your Cart is Empty</h1>
                    <h1 className="thankHead">Please Select Any Plan !</h1>
                </div>
            </div>}
        </div>
    );
}


export default CartPage;