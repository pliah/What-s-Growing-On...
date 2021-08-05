import { Link } from 'react-router-dom';
import React from 'react';
import './NavLinks.css';
import {ImHome} from "react-icons/im";
import  {SiShopify} from "react-icons/si";
import { AiFillGift } from  "react-icons/ai";
import { MdGroup} from "react-icons/md";
import {AiTwotoneLike } from "react-icons/ai";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider/StateProvider';
import { MdContactPhone } from "react-icons/md";
function NavLinks(){
    const [fromstate, dispatch] = useStateValue();
    return (
        <div className="nav-links">
            <div  className="nav-links-outer">
                <div  className="nav-links-inner">
                    <Link to="/"><ImHome /> Home </Link>
                    <Link to="/shop"><SiShopify /> Shop</Link>
                    <Link to="/gift"> < AiFillGift /> Gift Card</Link>
                    <Link to="/about"> <MdGroup /> About</Link>
                    <Link to="/recommend"><AiTwotoneLike /> Recommendation</Link> 
                    <Link to="/contact"><MdContactPhone /> Contact Us</Link>   
                    <Link to="/checkout" className="header-link">
                        <ShoppingBasketIcon />
                        <span className="option-two product-count">{fromstate?.basket?.length}</span>
                    </Link> 
                        <Link className="admin-link" to="/admin">

                            ADMIN</Link>
                  
                </div>
            </div>
        </div>
    )
    
}
export default NavLinks;