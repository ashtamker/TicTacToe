import React from 'react';
import  '../App.css';


class MainBoard extends React.Component {

    makeTheBoard = () => {
        let tile = [];
        for(let i =0; i < 9; i++){
            tile.push("tile empty")
        }
        return tile;
    };

    handleOnClick = (e) => {
        const {handleScore, endgame} = this.props;
        let tile = e.target;
        if(tile.classList.length === 2){
            this.play(tile);
        }

        let allTiles = document.querySelector(".empty");
        if(allTiles.length < 1){
            handleScore("draw");
            endgame(true);
            this.reset();

        }
    };

    play = (tile) => {
        const {player1, player2, turn, handleScore, endgame} = this.props;
        tile.classList.remove(not-played);
        if(player1){
            tile.innerHTML = "X";
            turn("player1", false,"player2", true);
            if(this.diagonal("X") || this.row("X") || this.column("X")){
                handleScore("player1");
                endgame(true);
                this.reset();
            }
        }
        if(player2) {
            tile.innerHTML = "O";
            turn("player2", false,"player1", true);
            if(this.diagonal("O") || this.row("O") || this.column("O")){
                handleScore("player2");
                endgame(true);
                this.reset();
            }
        }
    };

    

}


export default MainBoard;