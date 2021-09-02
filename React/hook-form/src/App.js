import React, { useState } from "react";
import './App.css';
import UserForm from './Components/Form';
import Results from "./Components/Results";

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: ""
  });
  return (
    <div className="App-header">
      <UserForm inputs="{state}" setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;
