import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
// import Resume from './components/Resume/Resume';

function App() {
  return (
    <div>

      <Router>

        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/project">
            <ProjectDetail></ProjectDetail>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          {/* <Route path="/resume">
            <Resume></Resume>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
