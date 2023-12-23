import logo from "../utils/images/logo.png";
const Header = () => {
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
          </ul>
        </div>
      </div>
      <hr style={{width:"90%"}}/>
    </div>
  );
};

export default Header;
