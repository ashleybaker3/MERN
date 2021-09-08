import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import SWForm from "./Views/SWForm";
import Planet from "./Views/Planets";
import Person from "./Views/People";
import Species from "./Views/Species";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/planets/:id">
            <Planet />
          </Route>
          <Route path="/people/:id">
            <Person />
          </Route>
          <Route path="/species/:id">
            <Species />
          </Route>
          <Route path="/">
            <SWForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
