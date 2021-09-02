import React from "react";

const UserForm = (props) => {
    const {inputs, setInputs} = props;


    const createUser = (e) => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        console.log("Hello", inputs.firstName);
    };

    return(
        <form> 
            <div>
                <label>First Name: </label> 
                <input type="text" name="firstName" onChange={createUser} />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastName" onChange={createUser} />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={createUser} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={createUser} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirm" onChange={createUser} />
            </div>
            <input type="submit" value="Create User"/>
        </form>

    );
}

export default UserForm;