import React, { Component } from "react";
import "./styles/page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Modal from "./components/modal";

class PageHome extends React.Component {
  submite = (e) => {
    e.preventDefault();
    if (this.state.busqueda == "") {
      this.props.history.push("/");
      console.log();
    } else {
      this.props.history.push("/busqueda?" + this.state.busqueda);
    }
  };

  state = {
    busqueda: "",
    modal: false,
  };

  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  modale = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form onSubmit={this.submite} name="Formulario">
              <div className="row">
                <div className="col">
                  <input
                    value={this.props.busqueda}
                    id="buscar"
                    type="text"
                    className="form-control lp"
                    placeholder="Buscar"
                    onChange={this.onChange}
                  />
                </div>
                <div className="actions">
                  <button className="btng" type="submit">
                    Buscar artistas similares
                  </button>
                  <button className="btng" onClick={this.modale}>
                    Modal
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            {" "}
            <h4>Este es un modal</h4>{" "}
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
