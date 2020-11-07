import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Class from "./containers/Class";
import Category from "./containers/Category";
import Search from "./containers/Search";
import Mypage from "./containers/Mypage";
import Review from "./containers/Review";

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
          <Route exact path="/category">
            <Category />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/mypage">
            <Mypage />
          </Route>
          <Route exact path="/review">
            <Review />
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
