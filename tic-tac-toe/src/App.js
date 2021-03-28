import './App.css';
import React from 'react';
// import MainBoard from './components/MainBoard';
import Login from './components/Login';
import Nav from './components/Nav';
import Game from './components/Game';
import Endround from './components/Endround';


class App extends React.Component {
  state = {
    draw: 0,
    userName1: "player1",
    userName2: "player2",
    winner: "",
    player1: 0,
    player2: 0,
    displayLog: true,
    displayEnd: false,
  };

  handleScore = (player) => {
    const {userName1, userName2} = this.state;
    let winner;
    if(player === "player1"){
      winner = userName1;
    }
    else if(player === "player2"){
      winner = userName2;
    }
    else{
      winner = "draw";
    }
    this.setState({
      [player]: this.state[player] + 1,
      winner: winner,
    });
  };

  handleName = (player1, player2) => {
    this.setState({userName1: player1, userName2: player2, displayLog: false});
  };

  handleEndGame = (i) => {
    this.setState({displayEnd : i})
  };

  render() {
    const {draw, player1, player2, displayEnd, displayLog, userName1, userName2, winner} = this.state;
    return (
      <div className="app">
        {displayEnd ? (<Endround winner={winner} endgame={this.handleEndGame} />) : null}
        {displayLog ? <Login names={this.handleName} /> : null }
        <Nav draw={draw} userName1={userName1} userName2={userName2} player1={player1} player2={player2} />
        <Game userName1={userName1} userName2={userName2} endgame={this.handleEndGame} handleScore={this.handleScore} />
      </div>
    );
  }
}



export default App;
