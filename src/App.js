// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import "./scss/main.scss";
import platformsData from "./platformsData.js";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Shelf from "./Shelf";

class App extends Component {
  state = {
    isLoading: false,
    collection: {},
    wishlist: {},
    loved: {},
    platforms: {},
    currentGame: {
      game: {},
      images: {}
    },
    searchData: {
      data: {},
      extra: {}
    }
    // Testing Data
    //
    // currentGame: {
    //   data: testData['data']['games'][0],
    //   extra: testData['include']
    // },
    // searchData: {
    //   data: testData.data,
    //   extra: testData.include
    // },
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    // this.fetchSearchData();
    this.setState({
      platforms: platformsData
    });

    if (
      localStorage.getItem("gs_collection") ||
      localStorage.getItem("gs_wishlist") ||
      localStorage.getItem("gs_loved")
    ) {
      this.setState({
        collection: JSON.parse(localStorage.getItem("gs_collection")),
        wishlist: JSON.parse(localStorage.getItem("gs_wishlist")),
        loved: JSON.parse(localStorage.getItem("gs_loved"))
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      "gs_collection",
      JSON.stringify(this.state.collection)
    );
    localStorage.setItem("gs_wishlist", JSON.stringify(this.state.wishlist));
    localStorage.setItem("gs_loved", JSON.stringify(this.state.loved));
  }

  testSearchData() {
    fetch(
      "https://api.thegamesdb.net/Games/ByGameName?apikey=fc24ef1a316c12ec1f22c3f526fc7e02e9156bf129d3073b320508c503833656&name=Snatcher&fields=players%2Cpublishers%2Cgenres%2Crating%2Cplatform%2Ccoop%2Cyoutube&include=platform%2Cboxart"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          searchData: {
            data: data.data,
            extra: data.include
          },
          isLoading: false
        })
      );
  }

  fetchSearchData(query) {
    if (query != null)
      fetch(
        "https://api.thegamesdb.net/Games/ByGameName?apikey=fc24ef1a316c12ec1f22c3f526fc7e02e9156bf129d3073b320508c503833656&name=" +
          query +
          "&fields=players%2Coverview%2Cpublishers%2Cgenres%2Crating%2Cplatform%2Ccoop%2Cyoutube&include=boxart"
      )
        .then(response => response.json())
        .then(data =>
          this.setState({
            searchData: {
              data: data.data,
              extra: data.include
            },
            isLoading: false
          })
        );
  }

  // getPlatform(id) {
  //   this.state.platforms[id];
  // }

  addGame(game, images, list) {
    const listGames = { ...this.state[list] };
    listGames[game["id"]] = { game: game, images: images };
    this.setState({ [list]: listGames });
    console.log(listGames);
    console.log(list);
  }

  openGame(game, images) {
    let currentGameState = { ...this.state.currentGame };
    currentGameState = { game: game, images: images };
    this.setState({ currentGame: currentGameState });
  }

  render() {
    const {
      collection,
      wishlist,
      loved,
      platforms,
      isLoading,
      currentGame,
      searchData
    } = this.state;
    return (
      <Router>
        <div className="App container-fluid h-100">
          <section className="row">
            <div className="col px-0">
              <Header fetchSearchData={this.fetchSearchData.bind(this)} />
            </div>
          </section>
          <section className="row h-100">
            <Sidebar
              collection={collection}
              wishlist={wishlist}
              loved={loved}
            />
            <Shelf
              isLoading={isLoading}
              collection={collection}
              wishlist={wishlist}
              loved={loved}
              currentGame={currentGame}
              searchData={searchData}
              platforms={platforms}
              addGame={this.addGame.bind(this)}
              openGame={this.openGame.bind(this)}
              // getPlatform={this.getPlatform.bind(this)}
            />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
