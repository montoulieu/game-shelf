import React from 'react';
import { Route } from 'react-router-dom';
import SingleGame from './views/SingleGame';
import SearchResults from './views/SearchResults';
import Collection from './views/Collection';

class Shelf extends React.Component {

  render() {
    // console.log(this.props.loved);

    return (
      <div className="col bg-primary">
        { !this.props.isLoading &&
          <div className="shelf px-3 py-5 h-100">
            {/* <Fade>
              <Switch> */}
                <Route path="/collection" render={()=> <Collection collection={this.props.collection} addGame={this.props.addGame}/>}/>
                <Route path="/wishlist" render={()=> <Collection collection={this.props.wishlist} addGame={this.props.addGame}/>}/>
                <Route path="/loved" render={()=> <Collection collection={this.props.loved} addGame={this.props.addGame}/>}/>
                <Route path="/game" render={()=> <SingleGame currentGame={this.props.currentGame} addGame={this.props.addGame}/>}/>
                <Route path="/search" render={()=> <SearchResults searchData={this.props.searchData} addGame={this.props.addGame}/>}/>
              {/* </Switch>
            </Fade> */}
          </div>
        }
      </div>
    );
  }
}

export default Shelf;
