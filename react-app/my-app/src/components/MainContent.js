import reactLogo2 from "../images/reactjs-icon 2.png"
function MainContent() {
    return (
  <main className="mainContent">
    <h3>Fun Facts about React</h3>
    <div className="listWithReactLogo">
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    <img src={reactLogo2} alt="reactLogo" className="reactLogo2"></img>
    </div>
  </main>
  )
}

export default MainContent;