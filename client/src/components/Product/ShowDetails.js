import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import {useLocation } from 'react-router';
import {Link  } from 'react-router-dom';
import './ShowDetails.css'
function ShowDetails() {
    const location=useLocation();
    const image=location.state.image;
    const description=location.state.description;
    const title=location.state.title;
    const price=location.state.price;
    return (
       
<div class="row g-0  position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
          <div className="product-img">
          </div>
          <ReactImageMagnify className="img"
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: false,
              src: image,
              width: 350,
              height: 270,
            },
            largeImage: {
              src: image,
              width: 1000,
              height: 1200,
            },
          }}/> 

        </div>
        <div className="details-text">
          <h5 className="mt1 ">{title}</h5>
          <h6 className="mt2">{description}</h6>
          <h5 className="mt3">price:${price}.00</h5>
        </div>
        <Link to= "/shop" >
        <button className="btn-shop mt1">Back To Shopping</button>
        </Link>
      </div>)
}
export default ShowDetails;
