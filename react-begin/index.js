function MyPage() {
  return (
    <div>
      <header>
        <nav>
          <img src="./reactjs-icon.png" width="40px"></img>
        </nav>
      </header>
      <h1>Reasons To Learn React</h1>
      <p>JSX</p>
      <ul>
        <li>learn react</li>
        <li>implement it in frontend</li>
        <li>use java for backend</li>
        <li>create full stack application</li>
        <li>good to go</li>
      </ul>
      <footer>
        <small>@ 2023 Surmanidze development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<MyPage />, document.querySelector("#root"));
