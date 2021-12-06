function NameForm ({ firstName, lastName, onChange }) {
    
    return (
        <>
            <div className="form-group">
                <label htmlFor="">Name</label>
                <input className="form-control" onChange={onChange} type="text" value={firstName} name="firstName" placeholder="John" />
                <input className="form-control" onChange={onChange} type="text" value={lastName} name="lastName" placeholder="Doe"/>
            </div>
        </>
    );
}

export default NameForm;