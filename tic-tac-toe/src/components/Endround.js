import React from 'react';
import '../App.css';

class Endround extends React.Component {
    state = {
        draw: "No winner",
        havewinner: "you win" + this.props.winner,
    };

    handleOnClick = () => {
        this.props.endgame(false);
    };
    render() {
        const { winner } = this.props;
        const { draw, havewinner } = this.state;
        return(
            <div className="warp">
                <div className="screen">
                    <p>{winner === "draw" ? draw : havewinner}</p>
                    <button className="btn btn-log" onClick={this.handleOnClick}>play again?</button>
                </div>
            </div>
        );
    }
}

export default Endround;