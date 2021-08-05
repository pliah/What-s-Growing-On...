import React, { useState } from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider/StateProvider';
import ProductCart from '../ProductCart/ProductCart';
import CartColumnsStyle from './CartColumnsStyle';
function Checkout() {
    const [{basket}] = useStateValue();
console.log('basket:',basket);
    return (
        <div className="checkout">
            <div className="checkout-left">
              {
                basket?.length === 0 ? (
                    <div>
                        <h2 className="checkout-title">Your shopping basket is empty.</h2>
                        <p>You have no items in your basket. Buy one.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="shopping-items">Items In The Shopping Basket:</h2> 
                            <CartColumnsStyle/>
                        {
                            basket?.map(item => {console.log('arrName:',item.arrName);
                               debugger;
                                return  <ProductCart
                                id={item.id}
                                title={item.title}
                                image={require(`../../image/${item.arrName}/${item.image}`).default}
                                price={item.price}
                                amount={item.amount} 
                                arrName={item.arrName}/>
                            })
                        }
                    </div>
                )
              }
            </div> 
            {  basket?.length > 0 && (
                 <div className="checkout-right">
                    <Subtotal />
                 </div>
                )
            }
        </div>
    )
}
export default Checkout;