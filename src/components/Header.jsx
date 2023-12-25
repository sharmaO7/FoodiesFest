import logo from "../utils/images/logo.png";
import { useState } from "react";
const Header = () => {
  // let btnName = "Login";

  const[btnNameReact,setbtnNameReact]= useState("Login");
  return (
    <div>
      <div className="header">
        <img className="logo" src={logo} />

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                ? setbtnNameReact("LogOut")
                : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
      <hr style={{ width: "90%" }} />
    </div>
  );
};

export default Header;
