import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import לוגו from '../../image/לוגו.jpg';
import './Header.css';
import Shop from '../Shop/Shop';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider/StateProvider';
function Header(){
    console.log(useStateValue());
    const [fromstate, dispatch] = useStateValue();
    console.log(useStateValue());
    
    const [state,setState]=useState(
        {searchText:''}
    )
    const logoutUser = () => {
        
        if(fromstate.loggedinuser){
            fromstate?.loggedinuser.signOut();
        }
    }
    function onInputChange(event) {
        setState({searchText: event.target.value });
    }
    return(
        <div>
        <nav className="header">
            <img className="header-logo" alt="" src={לוגו}/>
            <div className="header-search">
                <input type="text" className="search-input" 
                onChange={(event)=>onInputChange(event)}
                placeholder="Categories: Winter/Summer Annuals Flowers, Herbaceous Perennials,Shrubs,Vines, Garden equipment,grass,Ornamental/Fruiy trees, grass and garden products"/>
                <SearchIcon className="search-icon" />
            </div>
            <div className="header-nav">  
            <Link to="/checkout" className="header-link">
                <div className="header-optionBasket">
                    <ShoppingBasketIcon className="basket" />
                    <span className="option-two product-count">{fromstate?.basket?.length}</span>    
                </div>
            </Link>
            </div>
        </nav>
        <Shop searchText={state.searchText}/>
        </div>
    )
}
export default Header;
