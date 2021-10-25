import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import Auth from "./hoc/Auth";
import GlobalStyle from "./GlobalStyle";
import HomePage from "./components/views/HomePage/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, false)} />
          <Route exact path="/home" component={Auth(HomePage, true)} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
