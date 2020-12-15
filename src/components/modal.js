import React from "react";
import "../styles/modal.css";

class Modal extends React.Component {
  state = {
    estado: this.props.estado,
  };

  clickear = (e) => {
    e.preventDefault();
    this.setState({
      estado: false,
    });
  };

  componentWillReceiveProps(e) {
    this.setState({
      estado: e.estado,
    });
  }

  render() {
    if (this.state.estado !== true) {
      return null;
    } else {
      return (
        <React.Fragment>
          <div className="modale">
            <div className="cardModal">
              <button className="salir" onClick={this.clickear}>
                X
              </button>
              {this.props.children}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Modal;
