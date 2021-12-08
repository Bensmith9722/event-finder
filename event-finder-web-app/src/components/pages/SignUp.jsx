import { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthContext";

import NameForm from "../forms/NameForm";
import EmailForm from "../forms/EmailForm";
import PasswordForm from "../forms/PasswordForm";

const emptyAccountInfo = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

function SignUp () {
    const { auth } = useContext(AuthContext);
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
        
        // Create user with email + password using firebase.
        if (accountInfo.password === accountInfo.passwordConfirmation) {
            createUserWithEmailAndPassword(auth, accountInfo.email, accountInfo.password).then((userCredential) => {
                const user = userCredential.user;
                
                // Set users name
                // TODO: Normalize user name (using _?)
                updateProfile(user, {
                    displayName: accountInfo.firstName + " " + accountInfo.lastName
                });

                console.log(user);
            }).catch((errors) => {
                console.log(errors);
            });
        }
        else {
            console.log("Passwords do not match! Please re-type passwords.");
        }


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