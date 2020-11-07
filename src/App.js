import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Class from "./containers/Class";

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/class">
            <Class />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 0 auto;
  max-width: 375px;
`;
const Body = styled.div``;
