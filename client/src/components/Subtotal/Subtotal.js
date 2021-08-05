import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import './Subtotal.css';
import { useHistory } from 'react-router-dom';
function Subtotal() {
    const [{ basket}] = useStateValue();
    const getCartTotal = (basket) =>
        basket?.reduce((amount, item) => item.price*item.amount + amount, 0);
    const getCartTotalItems = (basket) =>
        basket?.reduce((amount, item) => item.amount + amount, 0);
    const history = useHistory();
    const routeChange = () =>{ 
        let path = "/delivery"; 
        history.push(path);
      }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                     <p>
                        Subtotal({getCartTotalItems(basket)} items): <strong>${value}</strong>
                    </p>
                )}
                decimalScale={2}
                value={getCartTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={routeChange} className="btn-finish">End of purchase</button>
        </div>
    )
}
export default Subtotal;