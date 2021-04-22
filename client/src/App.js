import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import {UserLogin} from "./components/UserLogin"

// Main Routet
function App() {
  return (
    <Router>
      <Switch>
        {/* Index page is login */}
        <Route exact path="/" component={UserLogin} />
        {/* Next is page where you can choose rooms */}
        <Route exact path="/rooms" component={React.Fragment} />
        {/* When you choosed room url have id, so you user can sand link directly to the room */}
        <Route exact path="/rooms/:roomId" component={React.Fragment} />
      </Switch>
    </Router>
  );
}

export default App;
