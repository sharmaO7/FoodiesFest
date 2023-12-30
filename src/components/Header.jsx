import logo from "../utils/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div>
      <div className="flex justify-between bg-pink-100 shadow-lg mb sm:bg-yellow-50">
        <img className="w-32" src={logo} />

        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button
              className="border border-solid border-black "
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
