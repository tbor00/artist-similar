import React from "react";
import "../styles/search.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
class Searchbar extends React.Component {
  state = {
    busqueda: "",
  };

  /*  disparo = (e) => {
    this.setState({
      busqueda: e.target.value,
    });

    console.log(e.target.value);
  };
*/
  submite = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              {" "}
              <Link to="/">
                <img className="logo" src={logo} alt="" />{" "}
              </Link>
            </div>
            <div className="col-md-4">
              <form onSubmit={this.submite} name="Formulario">
                <div className="row">
                  <div className="col">
                    <input
                      value={this.props.busqueda}
                      id="buscar"
                      type="text"
                      className="form-control imp"
                      placeholder="Buscar"
                      onChange={this.props.onChange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Searchbar;
