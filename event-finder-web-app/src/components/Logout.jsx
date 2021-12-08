import { signOut } from "firebase/auth";
import { useHistory } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Logout () {
    const { auth } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = (event) => {
    
        signOut(auth).then(() => {
            // User Logged out
        }).catch((error) => {
            console.log(error);
        });
    
        /* Redirect to root page. */
        history.push("/");
    
        event.preventDefault();
    }

    return (
        <>
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Logout;