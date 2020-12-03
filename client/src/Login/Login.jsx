import React from "react";
import LoginComponent from "./components/LoginComponent";
import LogoutComponent from "./components/LogoutComponent";

function Login(props) {
  return (
    <div>
      {props.currentAuth ? (
        <LogoutComponent changeAuthStatus={props.changeAuthStatus} currentAuth={props.currentAuth}/>
      ) : (
        <LoginComponent changeAuthStatus={props.changeAuthStatus} currentAuth={props.currentAuth}/>
      )}
    </div>
  );
}

export default Login;
