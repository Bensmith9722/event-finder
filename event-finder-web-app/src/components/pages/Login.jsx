import { useState } from "react";

import EmailForm from "../forms/EmailForm";
import PasswordForm from "../forms/PasswordForm";

const emptyLoginInfo = {
    email: "",
    password: "",
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

        /* TODO: Login if a user is found. */

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