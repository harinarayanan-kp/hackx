import React from "react";
import "../style.css"

const Signin = () => {
  return (
    <div className="regsign lightbg column">
      <div className="innercontainer column">
        <input placeholder="username" className="inputcontainer" />
        <input placeholder="password" className="inputcontainer" />
        <div className="forgotpass hoverblue"> forgot password?</div>
        <button className="signinbutton">Sign in</button>
        <div className="hoverblue">New User? Sign Up here</div>
      </div>
    </div>
  );
};

export default Signin;
