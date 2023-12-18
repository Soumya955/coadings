import React, { useState } from "react";
import "./css/SignUp.css";
import axios from "axios"
import { alertEnterValidEmailOrPhone, alertFillAllInputField, alertemailAlreadyExists, alertsignupSuccess, alertsomethingWentWrong } from "../alerts";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!emailOrPhone || !name || !password || !address) {
      alertFillAllInputField();
      return;
    }

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /^\d+$/;
    let name1;
    console.log(regexEmail.test(emailOrPhone),regexPhone.test(emailOrPhone))
    if (!regexEmail.test(emailOrPhone) && !regexPhone.test(emailOrPhone)) {
      alertEnterValidEmailOrPhone()
      return 
    }
    if (regexEmail.test(emailOrPhone)) {
      name1 = "email" ;
    }
    if (regexPhone.test(emailOrPhone)) {
      name1 = "phone" ;
    }
    console.log(name1,emailOrPhone)

    const payload = {    
     [name1]: emailOrPhone,
      name,
      address,
      password,
    };
    return axios
      .post("https://mock-server-1.onrender.com/api/signup", payload)
      .then((res) => {
        if(res.data=="Email is already Exists"){
          alertemailAlreadyExists()
        }else if(res.data=="Signup is successfull"){
          alertsignupSuccess();
          navigate("/signin");
        }else if(res.data=="Something went wrong"){
          alertsomethingWentWrong();
        }
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <form className="container" onSubmit={handleSignup}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email or Phone Number:</label>
        <input
          type="text"
          id="emailOrPhone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
      <p className="footer">
          Already have an account? <Link to={"/signin"}>Sign In</Link>
        </p>
    </form>
  );
};

export default SignUp;
