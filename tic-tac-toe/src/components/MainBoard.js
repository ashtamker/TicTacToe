import React from 'react';
import  '../App.css';


class MainBoard extends React.Component {

    makeTheBoard = () => {
        let tile = [];
        for(let i = 0; i < 9; i++){
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
        tile.classList.remove("empty");
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

        diagonal = (play) => {
            let left = [
                document.getElementById("tile0").innerHTML,
                document.getElementById("tile4").innerHTML,
                document.getElementById("tile8").innerHTML,
            ];
            let right = [
                document.getElementById("tile2").innerHTML,
                document.getElementById("tile4").innerHTML,
                document.getElementById("tile6").innerHTML,
            ];
            if(left[0] === play && left[1] === play && left[2] === play){
                return true;
            }
            if(right[0] === play && right[1] === play && right[2] === play){
                return true;
            }
            return false;

        };


        row = (play) => {
            let row1 = [
                document.getElementById("tile0").innerHTML,
                document.getElementById("tile1").innerHTML,
                document.getElementById("tile2").innerHTML,
            ];
            let row2 = [
                document.getElementById("tile3").innerHTML,
                document.getElementById("tile4").innerHTML,
                document.getElementById("tile5").innerHTML,
            ];
            let row3 = [
                document.getElementById("tile6").innerHTML,
                document.getElementById("tile7").innerHTML,
                document.getElementById("tile8").innerHTML,
            ];

            if(row1[0] === play && row1[1] === play && row1[2] === play){
                return true;
            }
            if(row2[0] === play && row2[1] === play && row2[2] === play){
                return true;
            }
            if(row3[0] === play && row3[1] === play && row3[2] === play){
                return true;
            }
            return false;

        };

        column = (play) => {
            let column1 = [
                document.getElementById("tile0").innerHTML,
                document.getElementById("tile3").innerHTML,
                document.getElementById("tile6").innerHTML,
            ];
            let column2 = [
                document.getElementById("tile1").innerHTML,
                document.getElementById("tile4").innerHTML,
                document.getElementById("tile7").innerHTML,
            ];
            let column3 = [
                document.getElementById("tile2").innerHTML,
                document.getElementById("tile5").innerHTML,
                document.getElementById("tile8").innerHTML,
            ];

            if(column1[0] === play && column1[1] === play && column1[2] === play){
                return true;
            }
            if(column2[0] === play && column2[1] === play && column2[2] === play){
                return true;
            }
            if(column3[0] === play && column3[1] === play && column3[2] === play){
                return true;
            }
            return false;

        };

        reset = () => {
            let tiles = document.querySelector(".tile");
            for(let i = 0; i < 9; i++){
                tiles[i].innerHTML = "";
                tiles[i].classList.add("empty");
            }
        };

        render(){
            return (
                <div className="board">
                    {this.makeTheBoard().map((e, i) => {
                     return (
                         <div id={`tile${i}`} key={i} className={e}
                         onClick={this.handleOnClick} />
                     );
                    }
                    )
                }
                </div>
            );
        }

}


export default MainBoard;