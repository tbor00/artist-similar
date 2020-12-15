import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/search-bar";
import Pageresult from "./components/page-result.js";
import "./styles/page-artist.css";
import SimilarArtist from "./components/similar-artist.js";
import Loading from "./components/loading";
import Error from "./components/error";

class Pageartist extends Component {
  state = {
    data: {
      artist: {
        image: [
          { "#texto": "" },
          { "#texto": "" },
          { "#texto": "" },
          { "#texto": "" },
          { "#texto": "" },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
    },
  };

  componentDidUpdate(prevProp) {
    if (this.props.location !== prevProp.location) {
      this.fetchData();
    }
  }

  ChangeHanddle = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let artista = this.props.history.location.search.substr(1);
    let url =
      "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      artista +
      "&api_key=86ffd04f33a368405846ecfdc7e29f0c&format=json";

    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log("Los datos q trae la api");
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Searchbar
          onChange={this.ChangeHanddle}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <Error />}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3" />
            <div className="col-md-6 margenes50">
              <img
                src={this.state.data.artist.image[3]["#text"]}
                alt=""
                className="pic-artist "
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <div className="row centrado">
            <SimilarArtist data={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pageartist;
