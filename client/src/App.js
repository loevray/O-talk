import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import Auth from "./hoc/Auth";
import GlobalStyle from "./GlobalStyle";
import HomePage from "./components/views/HomePage/HomePage";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, false)} />
            <Route exact path="/home" component={Auth(HomePage, true)} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
