import React, { useState } from 'react';
import NavB from './NavB';
import './css_/SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    First_Name: '',
    Last_Name: '',
    Aadhar_number: '',
    Email: '',
    Password: '',
    Confirm_Password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { First_Name, Last_Name, Aadhar_number, Email, Password, Confirm_Password } = user;
    if (First_Name && Last_Name && Aadhar_number && Email && Password && Confirm_Password) {
      axios
        .post('http://localhost:3000/SignUp', user) // Send a POST request to /SignUp
        .then((res) => {
          console.log(res.data.message);
          navigate('/SignIn'); // Redirect to the Signin page upon successful registration
        })
        .catch((err) => {
          console.log(err); // Add error handling
        });
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <>
      <div className="navb">
        <NavB />
      </div>
      <div className="content">
        <div className="side-panel">
          <div className="logo-margin">
            <div className="rotateimg">
            
            </div>
          </div>
        </div>
        <div className="signUp-box">
          <div className="login-page">
            <div className="form">
              <div className="login">
                <div className="login-header">
                  <h3>REGISTER</h3>
                  <p>Please enter your information.</p>
                </div>
              </div>
              <form className="login-form">
                <label>First Name</label>
                <input type="text" name="First_Name" value={user.First_Name} placeholder="" onChange={handleChange} />
                <label>Last Name</label>
                <input type="text" name="Last_Name" value={user.Last_Name} placeholder="" onChange={handleChange} />
                <label>Aadhar number</label>
                <input type="number" name="Aadhar_number" value={user.Aadhar_number} placeholder="" onChange={handleChange} />
                <label>Email</label>
                <input type="email" name="Email" value={user.Email} placeholder="" onChange={handleChange} />
                <label>Password</label>
                <input type="password" name="Password" value={user.Password} placeholder="" onChange={handleChange} />
                <label>Confirm Password</label>
                <input type="password" name="Confirm_Password" value={user.Confirm_Password} placeholder="" onChange={handleChange} />
                <button type="button" onClick={register}>
                  Register
                </button>
              </form>
              <div id="errormess"></div>
              <button style={{ marginTop: '10px' }} onClick={() => navigate('/SignIn')}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
