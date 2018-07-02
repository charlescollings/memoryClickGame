import React, { Component } from "react";
import GamePiece from "./components/GamePiece";
import ScorePanel from "./components/ScorePanel";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Instructions from "./components/Instructions/Instructions";

var score = 0;
var chosen = [];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    chosen
  };

  trackChosen = id => {
    // if chosen array contains id game over
    if (chosen.includes(id)) {
      console.log('game over')
      // set score back to 0
      score = 0
      // empty chosen array
      chosen = []
      // show message that game is over and click any image to start over
      // rerender imagages randomly
      const friends = this.state.friends.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
      
      this.setState({ friends });
      this.setState({ score });
      this.setState({ chosen });
    };  {
        // else add id to chosen array
        chosen.push(id)
        // add 1 to score
        score++
        // rerender imagages randomly
        const friends = this.state.friends.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        
        this.setState({ friends });
        this.setState({ score });
        this.setState({ chosen });
        }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <Instructions>Click on an image to earn points, but don't click on any more than once!</Instructions>
        <ScorePanel       
          score={score}
        />
        {this.state.friends.map(friend => (
          <GamePiece
            countScore={this.countScore}
            trackChosen={this.trackChosen}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
