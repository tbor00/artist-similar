import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-results.js";
import PageHome from "./page-home.js";
import Pageartist from "./page-artist.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Artistcard from "./components/artistcard.js";
import Layout from "./components/layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult}></Route>
            <Route exact path="/artista" component={Pageartist}></Route>
            <Route path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
