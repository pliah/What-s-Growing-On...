import { React, useState } from "react";
import '../../App.css'
import './Login.css';
import { IsValidNameAndPassword } from './Validations';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { withRouter } from "react-router";


const NewAdmin = (props) => {
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

  const handlerClick = () => {
    alert("Your details have arrived successfully");
    save(state);
    history.push('./AdminEnterPage');
  }
  const save = async (adminDetails) => {
    debugger;
    fetch("http://localhost:3000/admin/newAdmin", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem("token"))
        },
        body:JSON.stringify(adminDetails)
        })
  };
  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
    console.log(state);
  }

  function validate(event) {
    const { name, password } = state;
    const errors = {};
    errors.admins = IsValidNameAndPassword(name,password)
    if (!errors.admins) {
      handlerClick();
    }
    setState({ ...state, errors: errors });
    event.preventDefault();
  }

  

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form id="login">
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput label="Type admin name" icon="user" group type="text" validate error="wrong" value={state.name} onChange={(e) => onInputChange('name', e)}
                success="right" />
              <MDBInput label="Type your password" icon="lock" group type="password" validate value={state.password} onChange={(e) => onInputChange('password', e)} />
            </div>

            <br />
            {state.errors.admins && <div className="error">{state.errors.admins}</div>}
            <div className="text-center" onClick={validate}>
              <MDBBtn className="sendButton" type="submit">Save</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default withRouter(NewAdmin);


