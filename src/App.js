import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Resume from './components/Resume/Resume';
import ProjectHolder from './components/ProjectHolder/ProjectHolder';
import ContactHolder from './components/ContactHolder/ContactHolder';
import Services from './components/Services/Services';


function App() {
  return (
    <div>

      <Router>
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 500
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      /> */}

        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/project">
            <ProjectHolder></ProjectHolder>
          </Route>
          <Route path="/contact">
            <ContactHolder></ContactHolder>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
