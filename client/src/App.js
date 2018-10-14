import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Articles from "./pages/Articles";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      {/* <Switch>
        <Route exact path="/" component={Books} />
        
      </Switch> */}
    </div>
  </Router>
);

export default App;
