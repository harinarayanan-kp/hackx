import React from "react";
import "../style.css";

const Register = () => {
  return (
    <div className="regsign lightbg column">
      <div className="innercontainer column">
        <input placeholder="username" className="inputcontainer" />
        <input placeholder="password" className="inputcontainer" />
        <input placeholder="confirm password" className="inputcontainer" />
        {/* <div className="forgotpass hoverblue"> forgot password?</div> */}
        <button className="signinbutton">Register</button>
        <div className="">Already have an Account? <b className="hoverblue">Login here</b></div>
      </div>
    </div>
  );
};

export default Register;
