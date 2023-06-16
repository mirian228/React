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

function Footer() {
  return (
    <footer className="footer">
      <small>@ 2023 Surmanidze development. All rights reserved.</small>
    </footer>
  );
}

function MainInfo() {
  return (
    <div className="mainContent">
      <h1>Reasons To Learn React</h1>
      <p>JSX</p>
      <ul>
        <li>learn react</li>
        <li>implement it in frontend</li>
        <li>use java for backend</li>
        <li>create full stack application</li>
        <li>good to go</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainInfo />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
