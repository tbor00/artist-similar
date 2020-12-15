import React from "react";
import Artistcard from "./artistcard.js";
import { Link } from "react-router-dom";

class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar">
          <div className="col-md-12">
            <h5>Artistas similares</h5>
            <hr />
          </div>
        </div>

        <div className="row">
          {this.props.data.slice(0, 4).map((item, i) => {
            return (
              <Link to={item.name}>
                <Artistcard
                  img={item.image[3]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              </Link>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
