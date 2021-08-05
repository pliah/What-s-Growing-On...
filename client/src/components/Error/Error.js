import React from 'react';
import error from '../../image/Error/error.jpg'
import './Error.css';
function Error(props) {
    return (
      <div className="container">
          <div className="text-center "> 
              <h1 className="text-error">this URL: <span className="text-danger">
              {props.location.pathname}</span></h1>
              <img className="pic-error" src={error} alt=""></img>
              <h1 className="text-error">{" "}was not found</h1>
          </div>
      </div>
    );
  }
  
  export default Error;
