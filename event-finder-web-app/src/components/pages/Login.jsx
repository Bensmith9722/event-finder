import { useState, useContext } from "react";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence, browserLocalPersistence } from "@firebase/auth";
import { AuthContext } from "../AuthContext";

import EmailForm from "../forms/EmailForm";
import PasswordForm from "../forms/PasswordForm";

const emptyLoginInfo = {
    email: "",
    password: "",
    rememberUser: false
}

const handleEmailLogin = (auth, { email, password, rememberUser }) => {
    const loginPersistence = (rememberUser)? browserLocalPersistence : browserSessionPersistence;
    console.log(loginPersistence);

    setPersistence(auth, loginPersistence).then(() => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            /* User is signed in. */
            // TODO: Redirect to /
        }).catch((error) => {
            console.log(error)
        });
    });
}

function Login () {
    const [loginInfo, setLoginInfo] = useState(emptyLoginInfo);
    const { auth } = useContext(AuthContext);

    const onChange = (event) => {
        const {name, value} = event.target;

        setLoginInfo((prevLoginInfo) => {
            return {
                ...prevLoginInfo,
                [name]: value
            }
        });
    }

    const onCheckboxChange = (event) => {
        const {name, value} = event.target;
        const newCheckedValue = !(value === "true");
        
        setLoginInfo((prevLoginInfo) => {
            return {
                ...prevLoginInfo,
                [name]: newCheckedValue
            }
        });
    } 

    const onSubmit = (event) => {

        console.log(loginInfo);

        if (loginInfo.email && loginInfo.password) {
            handleEmailLogin(auth, loginInfo);
        }
        else {
            console.log("Please enter both a email and password.");
        }

        // Clear input fields
        setLoginInfo(emptyLoginInfo);
        event.preventDefault();
    } 


    return (
        <>
            <form onSubmit={onSubmit}>
                <EmailForm onChange={onChange} email={loginInfo.email} />
                <PasswordForm onChange={onChange} password={loginInfo.password} />

                <div className="">
                    <label htmlFor="rememberMeCheckbox" className="form-check-label">Remember Me</label>
                    <input type="checkbox" className="form-check-input" value={loginInfo.rememberUser} checked={loginInfo.rememberUser} onChange={onCheckboxChange} id="rememberUser" name="rememberUser" />
                </div>
        
                <button type="submit" className="btn btn-dark btn-primary">login</button>
            </form>
        </>
    );
}

export default Login;