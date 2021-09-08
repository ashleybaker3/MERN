import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Components/Home";
import Variable from "./Components/Number";
import HelloBlueRed from "./Components/Colors";

function App() {

  return (
      <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/hello/:blue/:red">
          <HelloBlueRed />
        </Route>
        <Route exact path="/:item">
          <Variable />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
