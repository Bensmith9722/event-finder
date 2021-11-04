import Logout from "./Logout";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Event Finder</Link>

            <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/signup">Sign Up</Link>
                <Link className="nav-item nav-link" to="/login">Login</Link>
                
                <Logout />
            </div>
        </nav>
    );
}

export default NavBar;