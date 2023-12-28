import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-cart">
        <h2>Welcome To Chitchat!</h2>
        <div className="login-button google">
          <GoogleOutlined /> Sign in with Google
        </div>

        <br /> <br />

        <div className="login-button facebook">
          <FacebookOutlined /> Sign in with Facebook
        </div>
        
      </div>
    </div>
  );
};

export default Login;
