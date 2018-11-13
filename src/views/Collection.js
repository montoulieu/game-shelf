import React from "react";
import GameCard from "../components/GameCard";

class Collection extends React.Component {
  componentDidMount() {}

  render() {
    // console.log(this.props.openGame);
    return (
      <div className="row collection">
        {Object.keys(this.props.collection).length !== 0 &&
          Object.keys(this.props.collection).map(key => (
            <GameCard
              key={key}
              index={key}
              game={this.props.collection[key]["game"]}
              images={this.props.collection[key]["images"]}
              addGame={this.props.addGame}
              openGame={this.props.openGame}
              platforms={this.props.platforms}
            />
          ))}
      </div>
    );
  }
}

export default Collection;
