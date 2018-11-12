import React from 'react';

class ListToggles extends React.Component {
  render() {
    return (
      <div className="game-toggles mt-auto">
        <div className="btn-toolbar align-items-center justify-content-center d-flex" role="toolbar" aria-label="Toolbar with button groups">
          <label className="text-dark mb-0 mr-3" htmlFor="">Add To:</label>
          <div className="btn-group" role="group" aria-label="Love/Hate">
            <button type="button" className="btn btn-secondary" onClick={(e) => this.props.saveGame(e, this.props.game, this.props.images, 'collection')}>Collection</button>
            <button type="button" className="btn btn-secondary" onClick={(e) => this.props.saveGame(e, this.props.game, this.props.images, 'wishlist')}>Wishlist</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListToggles;

