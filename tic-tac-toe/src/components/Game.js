import React from 'react';
import MainBoard from './MainBoard';
import { render } from 'react-dom';
import  '../App.css';


class Game extends React.Component {
    state = {
        player1: true,
        player2: false,
        check: true,
    };
}

turnOrder = (firstPlayer, bool1, secondPlayer, bool2) => {
    this.setState({
        [firstPlayer]: bool1,
        [secondPlayer]: bool2, 
    });

    render() {
        const {player1, player2} = this.state;
        const {userName1, userName2, endgame} = this.props;

        return(
            <div className="game">
                <p>{player1 ? userName1 : userName2 } your move</p>
            <MainBoard
              turn={this.turnOrder}
              player1={player1}
              player2={player2}
              endgame={endgame}
            /> 
            </div>

        );
    }
}

export default Game;