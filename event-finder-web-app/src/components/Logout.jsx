import { getAuth , signOut } from "firebase/auth";
import { useHistory } from "react-router";

function Logout () {
    const history = useHistory();

    const handleLogout = (event) => {
        const auth = getAuth();
    
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