import { useState } from "react";

import NameForm from "./forms/NameForm";
import EmailForm from "./forms/EmailForm";
import PasswordForm from "./forms/PasswordForm";

const emptyAccountInfo = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

function SignUp () {
    const [accountInfo, setAccountInfo] = useState(emptyAccountInfo);
    
    const onChange = (event) => {
        const {name, value} = event.target;

        setAccountInfo((prevAccountInfo) => {
            return {
                ...prevAccountInfo,
                [name]: value
            }
        });
    }

    const onSubmit = (event) => {

        console.log(accountInfo);

        // Clear input fields
        setAccountInfo(emptyAccountInfo);
        event.preventDefault();
    } 

    return (
        <>
            <form onSubmit={onSubmit}>
                <NameForm onChange={onChange} firstName={accountInfo.firstName} lastName={accountInfo.lastName} />
                <EmailForm onChange={onChange} email={accountInfo.email} />
                <PasswordForm onChange={onChange} confirmPassword password={accountInfo.password} passwordConfirmation={accountInfo.passwordConfirmation} />

                <button type="submit" className="btn btn-dark btn-primary">SignUp</button>
            </form>
        </>
    );
}

export default SignUp;