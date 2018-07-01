import React, { Component } from "react";
import GamePiece from "./components/GamePiece";
import ScorePanel from "./components/ScorePanel";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

var score = 0;
var chosen = [];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    chosen
  };

  countScore = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    score++
    // Set this.state.friends equal to the new friends array
    this.setState({ score });
  };

  trackChosen = id => {
    // if chosen array contains id game over
    if (chosen.includes(id)) {
      console.log('game over')
      // set score back to 0
      // rerender imagages randomly
    };
    chosen.push(id)
    // else add id to chosen array

    this.setState({ chosen });
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <ScorePanel       
          score={score}
        />
        {this.state.friends.map(friend => (
          <div>
          <GamePiece
            countScore={this.countScore}
            trackChosen={this.trackChosen}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
          </div>
        ))}
      </Wrapper>
    );
  }
}

export default App;
