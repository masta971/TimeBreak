import React, { Component } from "react";
import Login from "./Component/Login"; //Always capital letter
import "./App.css"; //My CSS
class Auth extends Component {
  render() {
    return (
      <div class="jumbotron-fluid">
        <div class="container">
          <h1>Hi, You have access to your Avatar</h1>
          <p>Please enter your pseudo into the field</p>
          <Login />
        </div>
      </div>
    );
  }
}
export default Auth;
