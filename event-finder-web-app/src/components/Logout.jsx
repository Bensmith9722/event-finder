import { getAuth , signOut } from "firebase/auth";
import { Redirect } from 'react-router-dom';

const handleLogout = (event) => {
    const auth = getAuth();

    signOut(auth).then(() => {
        // User Logged out
    }).catch((error) => {
        console.log(error);
    });
    event.preventDefault();
}

function Logout () {

    return (
        <>
            <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Logout;