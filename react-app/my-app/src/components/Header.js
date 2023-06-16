import reactLogo from "../images/reactjs-icon.png"
function Header() {
    return (
    <div>
        <nav className="navigation">
            <div className="logoWithText">
            <img src={reactLogo} className="reactLogo" alt="React Logo"></img>
            <h1>React Facts</h1>
            </div>
            <h2>React Course - Project 1</h2>
        </nav>
    </div>
     
    )
}

export default Header;