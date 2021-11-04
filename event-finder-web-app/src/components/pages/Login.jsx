import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

import EmailForm from "../forms/EmailForm";
import PasswordForm from "../forms/PasswordForm";

const emptyLoginInfo = {
    email: "",
    password: "",
}

const handleEmailLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        /* User is signed in. */
    }).catch((error) => {
        console.log(error)
    });
}

function Login () {
    const [loginInfo, setLoginInfo] = useState(emptyLoginInfo);

    const onChange = (event) => {
        const {name, value} = event.target;

        setLoginInfo((prevLoginInfo) => {
            return {
                ...prevLoginInfo,
                [name]: value
            }
        });
    }

    const onSubmit = (event) => {

        console.log(loginInfo);

        if (loginInfo.email && loginInfo.password) {
            handleEmailLogin(loginInfo.email, loginInfo.password);
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

                <button type="submit" className="btn btn-dark btn-primary">login</button>
            </form>
        </>
    );
}

export default Login;