import React from "react";
import ListToggles from "../components/ListToggles";

class SingleGame extends React.Component {
  getFrontCoverArt = images => {
    const imageBaseUrl = "https://cdn.thegamesdb.net/images/medium/";
    let frontCoverArt = images.filter(image => image.side === "front");
    return imageBaseUrl + frontCoverArt[0]["filename"];
  };

  componentDidMount() {}

  handleClick = () => {};

  render() {
    let releaseYear = "";
    let coverArt = "";

    const { currentGame } = this.props;
    releaseYear = currentGame.game.release_date.substring(0, 4);
    coverArt = this.getFrontCoverArt(currentGame.images);

    console.log(currentGame);

    // var currentLocation = this.props.location.pathname;

    // console.table(gameData);
    // console.log(platform);

    return (
      <div className="row cover-info">
        <div className="col-md-5 text-center ml-3">
          <div className="cover-art bg-warning py-3 mb-3 rounded">
            <img
              className="cover-front img-fluid"
              src={coverArt}
              alt="Game Cover Front"
            />
          </div>
          <ListToggles saveGame={this.saveGame} game={currentGame} />
        </div>
        <div className="col-md-5 offset-md-1 text-light">
          <h1>
            {currentGame.game.game_title}{" "}
            <span className="">({releaseYear ? releaseYear : ""})</span>
          </h1>
          <h4 className="mb-4">
            {this.props.platforms[currentGame.game["platform"]].name}
          </h4>
          <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + currentGame.game.youtube} controls="0" frameborder="0" allow="autoplay; encrypted-media;" allowFullScreen></iframe>

          <p>{currentGame.game.overview}</p>
        </div>
      </div>
    );
  }
}

export default SingleGame;
