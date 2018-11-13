import React from "react";
import GameCard from "../components/GameCard";

class SearchResults extends React.Component {
  componentDidMount() {}

  render() {
    console.log(this.props.searchData);
    return (
      <div className="row search-results">
        {Object.keys(this.props.searchData.data).length !== 0 &&
          Object.keys(this.props.searchData["data"]["games"]).map(key => (
            <GameCard
              key={key}
              index={key}
              game={this.props.searchData["data"]["games"][key]}
              images={
                this.props.searchData["extra"]["boxart"]["data"][this.props.searchData["data"]["games"][key]["id"]]
              }
              addGame={this.props.addGame}
              openGame={this.props.openGame}
              platforms={this.props.platforms}
            />
          ))}
      </div>
    );
  }
}

export default SearchResults;
