import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/search-bar";
import Pageresult from "./components/page-result.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.setState({
      busqueda: search,
    });
  }

  componentWillMount() {}

  ChangeHanddle = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Searchbar
          onChange={this.ChangeHanddle}
          busqueda={this.state.busqueda}
        />
        <Pageresult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
