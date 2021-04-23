import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import {LoginPage} from "./pages/LoginPage"
import {ChatPage} from "./pages/ChatPage"

// Main Routet
function App() {
  return (
    <Router>
      <Switch>
        {/* Index page is login */}
        <Route exact path="/" component={LoginPage} />
        {/* Next is page where you can choose rooms */}
        <Route exact path="/rooms" component={ChatPage} />
        {/* When you choosed room url have id, so you user can sand link directly to the room */}
        <Route exact path="/rooms/:roomId" component={React.Fragment} />
      </Switch>
    </Router>
  );
}

export default App;
