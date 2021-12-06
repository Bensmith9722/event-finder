
function PasswordForm ({ password, passwordConfirmation, confirmPassword, onChange }) {
    return (
        <>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" onChange={onChange} type="password" value={password} name="password" placeholder="Password" id="passsword" />
                
                {(confirmPassword) ? 
                    <>
                        {/* TODO: Remove in-line styling. */}
                        <label style={(password === passwordConfirmation)? {color: "green"} : {color: "red"}} htmlFor="passwordConfirmation">Password Confirmation</label>
                        <input className="form-control" onChange={onChange} type="password" value={passwordConfirmation} name="passwordConfirmation" placeholder="Re-typed Password" id="passwordConfirmation" />
                    </>
                    : null
                }
            </div>  
        </>
    );
}

export default PasswordForm;