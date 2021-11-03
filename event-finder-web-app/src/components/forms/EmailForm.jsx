
function EmailForm ({ email, onChange }) {
    return (
        <>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control" onChange={onChange} type="email" value={email} name="email" placeholder="me@email.com" id="email" />
            </div>
        </>
    );
}

export default EmailForm;