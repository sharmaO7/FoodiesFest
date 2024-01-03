import logo from "../utils/images/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items); //subscribing to the store using a selector
  console.log(cartItems);
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
            <li className="px-4 font-bold text-xl">
              <Link to="/cart">Cart-({cartItems.length} items)</Link>
            </li>
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
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
      <hr style={{ width: "90%" }} />
    </div>
  );
};

export default Header;
