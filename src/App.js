// eslint-disable-next-line 

import './App.css';
import logo from './logo1.png'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home1 from './components/Home1';


function App() {
  return (
    <>
    <Router>
      
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
          <img className='image-logo' src={logo} alt="logo"></img>
            <Login></Login>
          </Route>
          <Route exact path="/signup">
          <img  className='image-logo'src={logo} alt="logo"></img>
            <Signup></Signup>
          </Route>
          <Route exact path="/home">
          <img className='image-logo' src={logo} alt="logo"></img>
            <Home1></Home1>
          </Route>
        </Switch>

    </Router>
    </>
  );
}

export default App;
