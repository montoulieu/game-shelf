import React from 'react';
import { withRouter } from 'react-router-dom';
import ListToggles from './ListToggles';

class GameCard extends React.Component {

  getFrontCoverArt = images => {
    const imageBaseUrl = 'https://cdn.thegamesdb.net/images/thumb/';
    let frontCoverArt = images.filter( image => image.side === "front")
    return imageBaseUrl + frontCoverArt[0]['filename'];
  }

  saveGame = (event, game, images, list) => {
    event.preventDefault();
    this.props.addGame(game, images, list);
  }

  render() {
    const {game, images} = this.props;
    const coverArt = this.getFrontCoverArt(images);
    var currentLocation = this.props.location.pathname;

    return (
      <div className="game-card col-md-3 text-center mb-3">
        <div className="card h-100">
          <div className="card-body d-flex flex-column">
            <button className="love" onClick={(e) => this.saveGame(e, game, images, 'loved')}></button>
            <div className="cover-art-container mb-3">
              <img src={coverArt} className="img-fluid" alt="Game Cover Art"/>
            </div>
            <h5 className="card-title text-dark">{game.game_title}</h5>
            {currentLocation === '/search' &&
              <ListToggles saveGame={this.saveGame} game={game} images={images}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GameCard);

