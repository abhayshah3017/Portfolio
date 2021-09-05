import "./App.css";
import Header from "./Components/header";
import NavBar from "./Components/navBar";
import Particles from "react-particles-js";
import { Route, Redirect, BrowserRouter, Switch  } from "react-router-dom";
import Profile from "./Components/profile";
import Experience from "./Components/experience";
import Projects from "./Components/projects";
import Contact from "./Components/contact";


function App() {
  return (
    <BrowserRouter>
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <NavBar />
      <Switch>
        <Route path="/home" exact component={Header}></Route>
        <Route path="/profile" exact component={Profile}></Route>
        <Route path="/experience" exact component={Experience}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Redirect from="/" exact to="/home" />
        <Redirect to="/notFound" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
