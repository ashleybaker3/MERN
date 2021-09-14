import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from './views/main';
import Detail from './views/detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/products" />

        <Route exact path="/products">
          <Main />
        </Route>

        <Route exact path ="/products/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
