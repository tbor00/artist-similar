import React from "react";

class Error extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container centrado">
          <div className="col-md-12">
            <h1 className="centrar">ERROR 404</h1>
            <p className="centrar">
              Hubo un error inesperado! Intentelo nuevamente o contactenos
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Error;
