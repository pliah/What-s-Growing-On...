import React, { useState } from 'react';
import './Product.css';
//import Products from '../../DataBase/Products.json';
import { useStateValue } from '../StateProvider/StateProvider';
import Fade from 'react-reveal/Fade';
import { Link} from 'react-router-dom';
function Product({itemStatus,instock, id, title,  price,image,amount, description,productsItems}) {
    console.log(useStateValue());
    const [state, setState] = useState({
        visible: null,
        inStock: instock,
        disable:false,
        itemStatus:itemStatus,
    });
    const [basket, dispatch] = useStateValue();
    const amountError = () => {
        setState({ ...state, inStock: false,itemStatus:'Out Of Stock'  });
        alert(" אזל")
    }
     const addToBasket =  async() => {
         debugger;
        await setState({ ...state, itemStatus:'In Cart', disable:true});
        await dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                amountError: amountError,
                arrName: 'Products',
                items: productsItems,
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    description: description,
                    amount: 1,
                }
            }
        })
    }
    let image1 = require('../../image/Products/'+`${image}`)
    return (
        <div className="product">
            <Fade buttom cascade={true}>
                <div className="product-information">
                    <p>{title}</p>
                    <p className="product-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <img src={image1.default} alt=""/> 
               <Link  className="product-link"
                to={{ 
                    state: {title:title, image:image1.default, price:price, description:description}, 
                    pathname: "/details"}}>
                <button className="btn-details"
                    >For Further Details
                </button>
                </Link>
              
                <button className={state.inStock ?  "in-cart": "out-of-stock"} onClick={addToBasket}
                    disabled={state.disable}>{state.itemStatus}
                </button>
            </Fade>
        </div>
    )
}
export default Product;