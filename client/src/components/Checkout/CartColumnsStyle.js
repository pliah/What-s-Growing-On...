import React from 'react';
import './CartColumnsStyle.css';
function CartColumnsStyle() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">image</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">title</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">price</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">quantity</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">remove</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">total</p>
              </div>
          </div>
     </div>
    );
  } 
  export default CartColumnsStyle;