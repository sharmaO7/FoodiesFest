import logo from "../utils/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div>
      <div className="header">
        <img className="logo" src={logo} />

        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
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
