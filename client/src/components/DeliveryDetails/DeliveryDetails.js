
import './DeliveryDetails.css';
import { useStateValue } from '../StateProvider/StateProvider';
import PayPalButton from '../Payment/PayPalButton';
import React, { useState , useEffect} from "react";
import { MDBInput,MDBContainer,MDBRow,MDBCol,MDBBtn } from "mdbreact";
import {validFeature,validEmail,validNumber} from './validation'
function DeliveryDetails ({history}) {
  const [state,setState] = useState({
    fname: "",
    lname: "",
    email: "",
    city: "",
    neighborhood:"",
    street: "",
    number:""
  });
  const [value,setValue] = useState({
    disable:false})
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    city: "",
    neighborhood:"",
    street: "",
    number:"" 
   });
  const submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };
  debugger;
  const [products,setProducts]=useState({
    GiftCards:[],
    Products:[]});
  const changeHandler = event => {
    setState({...state, [event.target.name]: event.target.value });
  };
  const [{ basket, dispatch }] = useStateValue();
  const getCartTotal = (basket) =>
        basket?.reduce((amount, item) => item.price*item.amount + amount, 0);
  function sendEmailBack(value){ 
      fetch("http://localhost:3000/user/email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value)
      });
    }
    const addRespond = async (recDetails) => {
      debugger;
      fetch("http://localhost:3000/user/newUser", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        },
        body:JSON.stringify(recDetails)
        })
      }
    const finishShopping = () => {
          basket?.forEach((item, index) => {
              let amount;
              debugger;
              products[item.arrName].forEach(prod=>{if(prod.id===item.id)amount= prod.amount})
              let newItem = {
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  image: item.image,
                  amount:amount-item.amount,
                  description: item.description
              }
              fetch(`http://localhost:3000/${item.arrName}/${item.id}`, {
                  method: "PUT",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  
                  body: JSON.stringify(newItem),
              })
          })
          sendEmailBack({email:state.email,name: state.fname + ' ' + state.lname+'\n',
             message:'Num Of details: '+basket?.length+', '+
              'For payment: $'+getCartTotal(basket)})
      }
    function validate(event) {
      //checks all the validation function, for errors massage
      const { fname,lname,email,city,neighborhood,street,number} = state;
      errors.fname = validFeature(fname);
      errors.lname = validFeature(lname);
      errors.email = validEmail(email);
      errors.city = validFeature(city);
      errors.neighborhood = validFeature(neighborhood);
      errors.street = validFeature(street);
      debugger
      errors.number = validNumber(number);
      setErrors({ ...errors, errors: errors });debugger
      if (errors.fname !== null || errors.lname !== null || errors.email !== null || 
        errors.city !== null || errors.neighborhood !== null||errors.street !== null||errors.number !== null) {
        setValue({disable:false});
        event.preventDefault(); 
      }
      else {
        addRespond(state,basket);
        finishShopping();
        setValue({disable:true});
        event.preventDefault();   
      }
    }
    const getProduct=()=>{
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
        debugger;
         setProducts({...products,GiftCards:res})
        })
    }
    useEffect(()=>{
      getProduct();
      getGiftCard();
    },[]);
    return (

          <div
             className='needs-validation login-form'
          noValidate
           >
               <MDBInput
                icon='user'
                value={state.fname}
                name='fname'
                onChange={changeHandler}
                type='text'
                id='materialFormRegisterNameEx'
                label='First name'
                className='input-style'
                required
              >
               <div className="errors">
                  {errors.fname}
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
              <MDBInput
                icon='address-card'
                value={state.lname}
                name='lname'
                onChange={changeHandler}
                type='text'
                id='materialFormRegisterEmailEx2'
                label='Last name'
                className='input-style'
                required
              >
                <div className="errors">
                  {errors.lname}
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
               <MDBInput
                icon='envelope-open'
                value={state.email}
                onChange={changeHandler}
                type='email'
                id='materialFormRegisterConfirmEx3'
                name='email'
                label='Your Email address'
                className='input-style'
                required
              >
                <div className="errors">
                  {errors.email}
                </div>
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
              <MDBInput
                icon='city'
                value={state.city}
                onChange={changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='City'
                className='input-style'
                required
              > 
              <div className="errors">
                  {errors.city}
              </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
              <MDBInput
                icon='map-marked-alt'
                value={state.state}
                onChange={changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='neighborhood'
                label='Neighborhood'
                className='input-style'
                required
              >
                <div className="errors">
                  {errors.neighborhood}
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
              <MDBInput
                icon='road'
                value={state.state}
                onChange={changeHandler}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='street'
                label='Street'
                className='input-style'
                required
              >
              <div className="errors">
                {errors.street}
              </div>
              <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
              <MDBInput
                icon='sort-numeric-up'
                value={state.state}
                onChange={changeHandler}
                type='number'
                min='1'
                id='materialFormRegisterPasswordEx4'
                name='number'
                label='Number'
                className='input-style'
                required
              >
                 <div className="errors">
                  {errors.number}
                </div>
              </MDBInput>
        { value.disable&&<PayPalButton total={getCartTotal(basket)}
                history={history}   /> 
        } 
        <button className="btnlog"  onClick={validate} disabled={value.disable}>
          Submit Form
        </button> 
        </div>  

    );
 }

export default DeliveryDetails;

  