import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {
  HomePage, RegisterPage
} from './Pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
