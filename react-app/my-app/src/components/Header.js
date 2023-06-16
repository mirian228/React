import reactjsicon from "../images/reactjs-icon.png";
function Header() {
  return (
    <header>
      <nav className="navigation">
        <img src={reactjsicon} alt="reactjsicon" className="reactLogo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
