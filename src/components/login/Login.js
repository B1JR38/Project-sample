import React from "react";
import { Link } from "react-router-dom";
import Button from "../web components/buttons/Button";
import Input from "../web components/input/Input";
import "./login.css";

const Signup = () => {
  return (
    <div className="main-container">
      <div className="signup-container">
        <div className="form-header">
          <h1>Sign in</h1>
        </div>
        <div className="form-span"></div>
        <div className="form-input-container">
          <form>
            <Input
              inputType={"email"}
              inputName={"email"}
              inputId={"email"}
              inputPlaceholder={"Enter email"}
            ></Input>
            <br />
            <Input
              inputType={"password"}
              inputName={"password"}
              inputId={"password"}
              inputPlaceholder={"Password"}
            ></Input>
            <br />
            <div className="form-btn">
              <Button BtnName={"Login"} />
            </div>
          </form>
          <footer className="footer">
            <p>
              Not a user?{" "}
              <Link to="/user/signup" className="link">
                Sign up
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Signup;
