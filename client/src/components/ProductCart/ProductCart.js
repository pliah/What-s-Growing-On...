import React, { useEffect, useState } from 'react';
import './ProductCart.css';
import { useStateValue } from '../StateProvider/StateProvider';
import { Component } from 'react';
function ProductCart({ id, title, image, price,amount, arrName }) {
    debugger;
    const [{ basket }, dispatch] = useStateValue();
    const [products,setProducts]=useState({
        GiftCards:[],
        Products:[]});
    const removeitem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    const decrement = () => {
        if (amount - 1 >= 1)
            dispatch({
                type: 'SET_AMOUNT',
                payload: {
                    amount: amount - 1,
                    id: id,
                    items: products[arrName]
                }
            })
    }
    const increment = () => {
        debugger;
        dispatch({
            type: 'SET_AMOUNT',
            payload: {
                amount: amount + 1,
                id: id,
                items:products[arrName]
            }   
        })
     
    }
    const getProduct=()=>{
        debugger;
        fetch("http://localhost:3000/Products/getAllProduct",{
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
      }
      }).then(res=>res.json())
      .then((res)=>{
         setProducts({...products,Products:res})
        })
    }
    const getGiftCard=()=>{
        debugger;
      fetch("http://localhost:3000/GiftCards/getAllGiftCard", {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
      }
      }).then(res=>res.json())
      .then((res)=>{
         setProducts({...products,GiftCards:res})
        })
    }
    useEffect(()=>{
        debugger;
      getProduct();
      getGiftCard();
    },[])
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={image} alt="" style={{ width: "5rem", height: "5rem" }} className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {price}$
       </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-white mx-1"
                            onClick={() => decrement()}> - </span>
                        <span className="btn btn-white mx-1">{amount}</span>
                        <span className="btn btn-white mx-1" onClick={() => increment()}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeitem()}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>total : {amount * price}$</strong>
            </div>
        </div>
    )
}
export default ProductCart;
