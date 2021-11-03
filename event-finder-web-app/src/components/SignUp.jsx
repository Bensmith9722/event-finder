import { useState } from "react";

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
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input className="form-control" onChange={onChange} type="text" value={accountInfo.firstName} name="firstName" placeholder="John" />
                    <input className="form-control" onChange={onChange} type="text" value={accountInfo.lastName} name="lastName" placeholder="Doe"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input className="form-control" onChange={onChange} type="email" value={accountInfo.email} name="email" placeholder="JohnDoe@example.com" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input className="form-control" onChange={onChange} type="password" value={accountInfo.password} name="password" placeholder="Password" />
                    <input className="form-control" onChange={onChange} type="password" value={accountInfo.passwordConfirmation} name="passwordConfirmation" placeholder="Re-typed Password" />
                </div>

                <button type="submit" className="btn btn-dark btn-primary">SignUp</button>
            </form>
        </>
    );
}

export default SignUp;