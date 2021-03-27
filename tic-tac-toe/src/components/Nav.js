import React from 'react';
import '../App.css';

class Nav extends React.Component {
    render() {
        const {player1, player2, draw, userName1, userName2} = this.props;
        return (
            <div className="navbar">
                <div className="title">
                    <h1>Tic Tac Toe</h1>
                </div>
                <div className="score">
                  <p>{userName1}: {player1}</p>
                  <p>{userName2}: {player2}</p>
                  <p>Draw: {draw}</p>
                </div>
            </div>
        );
    }
}

export default Nav;