import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  alertEnterValidEmailOrPhone,
  alertFillAllInputField,
  alertinvalidloginCredentials,
  alertloginSuccess,
  alertsomethingWentWrong,
  invalidloginCredentials,
} from "../alerts";
import { saveLocalStorageData } from "../Utils/localstorage";

export default function SignIn() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    if (!emailOrPhone || !password) {
      alertFillAllInputField();
      return;
    }

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /^\d+$/;
    let name1;
    console.log(regexEmail.test(emailOrPhone), regexPhone.test(emailOrPhone));
    if (!regexEmail.test(emailOrPhone) && !regexPhone.test(emailOrPhone)) {
      alertEnterValidEmailOrPhone();
      return;
    }
    if (regexEmail.test(emailOrPhone)) {
      name1 = "email";
    }
    if (regexPhone.test(emailOrPhone)) {
      name1 = "phone";
    }
    console.log(name1, emailOrPhone);

    const payload = {
      [name1]: emailOrPhone,
      password,
    };
    return axios
      .post("https://mock-server-1.onrender.com/api/login", payload)
      .then((res) => {
        if (res.data == "Invalid Credentials") {
          alertinvalidloginCredentials();
        } else if (res.data.message == "Login Successfull") {
          alertloginSuccess();
          saveLocalStorageData("user",res.data.user)
          navigate("/home");
        } else if (res.data == "Something went wrong") {
          alertsomethingWentWrong();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <h2>Sign In</h2>
        <div className="formdiv">
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
            <button onClick={() => handleClick()} type="submit">
              Sign In
            </button>
          </div>
        </div>
        <p className="footer">
          Don't have an account? <Link to={"/"}>Sign up</Link>
        </p>
      </div>
    </>
  );
}
