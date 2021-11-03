import React from "react";
import { Route, Switch } from "react-router-dom";
// import Home from "./components/home";
import Nav from "./components/Nav";
import About from "./components/about";
// import Contact from "./components/contact";
import Cards from "./components/Cards";
// import Card from "./components/card";
// import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/About" component={About} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/cards" component={Cards} />
        {/* <Route exact path="/card/:id/:type" component={Card} /> */}
      </Switch>
    </>
  );
};

export default App;
