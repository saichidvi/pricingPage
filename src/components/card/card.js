import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartPage from "../../pages/cartPage/cartPage";
import "./card.css";

const Card = ({item}) => {
    const [features,setFeatures] = useState();
    const [plans,setPlans] = useState();
    const [loading,setLoading] = useState(false);
    const [loading1,setLoading1] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setFeatures(item?.features);
        setPlans(item?.plans);
        setLoading1(true);
        setLoading(true);
    },[item]);
    return(
        <div className="card">
        <h2 className="head2">{item?.plan}</h2>
        <div className="list">
          <ul>
             {loading ? <>
              {features.map((item) => {
                 return(
                  <li className="listChild"><span className="dcrtext">{item?.type}</span> -<span className="status">{item.exists}</span></li>
                 ); 
              })}
             </> : "loading"}
          </ul>
        </div>
        <div className="plans">
        {loading1 ? <>
              {plans.map((item1) => {
                  return(
                      <div className="paySection">
                          <p className="plansChild">costs ${item1?.cost} for {item1?.duration}yr</p>
                          <button className="btn"  onClick={() => {
                           let obj = {
                            plan : item?.plan,
                            cost : item1?.cost
                           };
                            navigate("/cartPage",{state : obj});
                          }}>Pay Now</button>
                      </div>
                  )
              })}
          </> : "oading"}
        </div>
      </div>
    );
}


export default Card;