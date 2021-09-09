import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SWForm = (props) => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState(0);
    const history = useHistory();

    const sendForm = (e) => {
        e.preventDefault();

        console.log({category});
        console.log({id});

        history.push("/" + `${category}` + "/" + `${id}`);
        
    }

    return (
        <div className="mb-4">
            <form onSubmit={(e)=> {
                sendForm(e);
            }}
            className="row d-flex align-items-center justify-content-center m-4 p-3">
                <div className="col-auto">
                    <div className="row d-flex justify-content-center align-items-center">
                        <label for="category" className="col-auto">Search for: </label>
                        <div className="col-auto">
                            <select className="form-select" onChange={ (e) => setCategory(e.target.value)} value={category}>
                                <option value="">Category</option>
                                <option value="people">People</option>
                                <option value="planets">Planets</option>
                                <option value="species">Species</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <label for="id" className="me-2">ID: </label>
                    <input type="number" value={id} onChange={ (e) => setId(e.target.value)}/>
                </div>
                <input type="submit" value="Search" className="col-auto bg-dark text-warning border-2 border-dark"/>
            </form>
        </div>
    )
}

export default SWForm;