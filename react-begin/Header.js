function Header() {
    return (
      <header>
        <nav className="navigation">
          <img src="./reactjs-icon.png" className="reactLogo"></img>
          <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header();