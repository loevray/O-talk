import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import Auth from "./hoc/Auth";
import Home from "./components/views/Home/Home";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, false)} />
          <Route exact path="/home" component={Auth(Home, true)} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
