import { Link } from "react-router-dom";
import { useContext } from "react";

import Logout from "./Logout";
import { AuthContext } from "./AuthContext";

function NavBar () {
    const { user } = useContext(AuthContext);
    console.log(user);

    /* A user is logged in, show relevant navbar. */
    if (user) {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Event Finder</Link>

                <div className="navbar-nav">
                    <span className="navbar-text" style={{paddingRight: "2rem"}} > Hello, {user.displayName}! </span>
                    <Logout />
                </div>
            </nav>
        );
    }
    else {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Event Finder</Link>

                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/signup">Sign Up</Link>
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;