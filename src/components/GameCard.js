import React from "react";
import { withRouter } from "react-router-dom";
import ListToggles from "./ListToggles";

class GameCard extends React.Component {
  getFrontCoverArt = images => {
    const imageBaseUrl = "https://cdn.thegamesdb.net/images/thumb/";
    // Object.keys(images).forEach(key => images[key] === undefined ? delete images[key] : '');
    // console.log(images);
    if(images !== undefined){
      let frontCoverArt = images.filter(image => image.side === "front");
      return imageBaseUrl + frontCoverArt[0]["filename"];
    }
  };

  saveGame = (event, game, images, list) => {
    event.preventDefault();
    this.props.addGame(game, images, list);
  };

  viewGame = (event, game, images) => {
    event.preventDefault();
    // console.log(game);
    this.props.openGame(game, images);
    this.props.history.push("/game");
  };

  render() {
    const { game, images } = this.props;
    let coverArt = '';

    if(images !== null){
      coverArt = this.getFrontCoverArt(images);
    }
    var currentLocation = this.props.location.pathname;

    // console.log();

    return (
      <div className={"game-card col-md-4 col-xl-3 text-center mb-3 platform-" + this.props.platforms[game["platform"]].alias}>
        <div className="card bg-light text-dark h-100 shadow-sm">
          <div className="card-body d-flex flex-column">
            <button
              className="love"
              onClick={e => this.saveGame(e, game, images, "loved")}
            />
            <h6 className="mb-3">
              {this.props.platforms[game["platform"]].name}
            </h6>
            <div className="cover-art-container mb-3">
              {coverArt ? (
                <img src={coverArt} className="img-fluid rounded" alt="Game Cover Art" />
              ) : (
                <div className="cover-placeholder bg-danger p-5"></div>
              )}
            </div>
            <h5 className="card-title font-weight-bold mb-3">{game.game_title}</h5>
            <button
              className="btn btn-primary mt-auto"
              onClick={e => this.viewGame(e, game, images)}
            >
              View Game
            </button>
            {currentLocation === "/search" && (
              <ListToggles
                saveGame={this.saveGame}
                game={game}
                images={images}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GameCard);
