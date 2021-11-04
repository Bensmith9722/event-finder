import Logout from "./Logout";

function NavBar () {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Event Finder</a>

            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/signup">Sign Up</a>
                <a className="nav-item nav-link" href="/login">Login</a>
                
                <Logout />
            </div>
        </nav>
    );
}

export default NavBar;