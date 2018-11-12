import React from "react";
import ListToggles from "../components/ListToggles";

class SingleGame extends React.Component {

  componentDidMount() {
  }

  handleClick = () => {
  }

  render() {
    const imageBaseUrl = 'https://cdn.thegamesdb.net/images/large/';
    const gameData = this.props.currentGame['data'];
    const imageData = this.props.currentGame['extra']['boxart']['data'];
    const platformData = this.props.currentGame['extra']['platform']['data'];
    const platform = platformData[gameData['platform']]['name'];
    const releaseDate = gameData['release_date'];
    const releaseYear = releaseDate.substring(0,4);
    const frontCoverArt = imageBaseUrl + imageData[gameData['id']][1]['filename'];


    console.table(gameData);
    // console.log(platform);

    return (
      <div className="row cover-info">
        <div className="col-md-5 text-center ml-3">
          <div className="cover-art bg-warning py-3 mb-3 rounded">
            <img className="cover-front img-fluid" src={ frontCoverArt } alt="Game Cover Front" />
          </div>
          <ListToggles saveGame={this.saveGame} game={gameData}/>
        </div>
        <div className="col-md-5 offset-md-1">
          <h1>{ gameData['game_title'] } <span className="">({ releaseYear })</span></h1>
          <h4 className="mb-4">{ platform }</h4>
          <p>{ gameData['overview'] }</p>
        </div>
      </div>
    )
  }
}

export default SingleGame;
