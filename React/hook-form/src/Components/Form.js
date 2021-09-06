import React, {useState} from "react";
import Results from "./Results";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [userCreated, setUserCreated] = useState(false);

    const changeFirst = e => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters.");
        }
        else {
            setFirstNameError("");
        }
    }
    
    const changeLast = e => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters.");
        }
        else {
            setLastNameError("");
        }
    }

    const changeEmail = e => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.");
        }
        else {
            setEmailError("");
        }
    }

    const changePassword = e => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        }
        else {
            setPasswordError("");
        }
    }

    const changeConfirm = e => {
        setConfirm(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmError("Confirm password must be at least 8 characters.");
        }
        else {
            setConfirmError("");
        }
        if(e.target.value !== password) {
            setConfirmError("Confirm password must match password.");
        }
        else {
            setConfirmError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { 
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirm: confirm
        };
        setUserCreated(true);
        console.log("Hello", newUser.firstName);
    };

    return(
        <div>

            <form onSubmit={(e)=> {
                createUser(e);
            }}> 
                <div>
                    <label>First Name: </label> 
                    <input onChange={(e) => {
                        changeFirst(e);
                        }}
                        type="text"
                        value={firstName}/>
                    {
                        firstNameError ?
                        <p>{firstNameError}</p> : ""
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input onChange={(e) => {
                        changeLast(e);
                        }}
                        type="text"
                        value={lastName}/>
                    {
                        lastNameError ?
                        <p>{lastNameError}</p> : ""
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input onChange={(e) => {
                        changeEmail(e);
                        }}
                        type="text"
                        value={email}/>
                    {
                        emailError ?
                        <p>{emailError}</p> : ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={(e) => {
                        changePassword(e);
                        }}
                        type="text"
                        value={password}/>
                    {
                        passwordError ?
                        <p>{passwordError}</p> : ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input onChange={(e) => {
                        changeConfirm(e);
                        }}
                        type="text"
                        value={confirm}/>
                    {
                        confirmError ?
                        <p>{confirmError}</p> : ""
                    }
                </div>
                <input type="submit" value="Create User"/>
            </form>
                {
                    userCreated ? 
                    <Results 
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    password={password}
                    confirm={confirm}
                    /> : ""
                }
        </div>

    );
}

export default UserForm;