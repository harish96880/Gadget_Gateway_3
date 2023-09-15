import React from "react";
import { Link } from "react-router-dom";

function SuccessfullyPwd() {
  return (
    <div>
      SuccessfullyPwd
      <Link to={"/login"}>Back to login</Link>
    </div>
  );
}

export default SuccessfullyPwd;
