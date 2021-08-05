import { React, useState, useEffect } from "react";
import '../../App.css'
import './Login.css';
import { IsValidAdminDetails } from './Validations';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { withRouter } from "react-router";


const Login = (props) => {
  const { history } = props;
  const [state, setState] = useState({
    name: '',
    password: '',
    admins: '',
    errors: {
      name: '',
      password: '',
      admins: '',

    }
  });
  const loginAuth = () =>{ 
    debugger;      
    fetch("http://localhost:3000/admin/login", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(state)
      }).then(response => response.json())
      .then(data => localStorage.setItem ('token', JSON.stringify(data.token)))

  }
  const handlerClick = () => {
    history.push('./AdminEnterPage');
  }
  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
    console.log(state);
  }

  function validate(event) {
    const { name, password } = state;
    const errors = {};
    errors.admins = IsValidAdminDetails(name, password,admins)

    if (!errors.admins) {
      loginAuth();
      handlerClick();
    }
    setState({ ...state, errors: errors });
    event.preventDefault();
  }
  const[admins,setAdmins]=useState();
  useEffect(()=>{
      fetch("http://localhost:3000/admin/getAllAdmins", {
      method: "GET",
      headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
      }
      }).then(res=>res.json())
      .then((res)=>setAdmins(res))
      debugger;
  },[])
  

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form id="login">
            <p className="h5 text-center mb-4">SIGN IN</p>
            <div className="grey-text">
              <MDBInput label="Type admin name" icon="user" group type="text" validate error="wrong" value={state.name} onChange={(e) => onInputChange('name', e)}
                success="right" />
              <MDBInput label="Type your password" icon="lock" group type="password" validate value={state.password} onChange={(e) => onInputChange('password', e)} />
            </div>

            <br />
            {state.errors.admins && <div className="error">{state.errors.admins}</div>}
            <div className="text-center" onClick={validate}>
              <MDBBtn className="sendButton" type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default withRouter(Login);


