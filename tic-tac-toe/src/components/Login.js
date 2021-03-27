import React from 'react';
import '../App.css';

class Login extends React.Component {
    state = {
        player1: "",
        player2: "",
    };

    handleOnChange = (e) => {
        console.log(e.target.value);
        let player = e.target.id;
        this.setState({[player]: e.target.value});
    }

    handleOnClick = (e) => {
        e.preventDefault();
        const {player1, player2} = this.state;
        this.props.names(player1, player2);
    };

    render(){
        return(
            <div className="wrap">
                <div className="screen">
                    <form>
                        <div className="form-group">
                            <label>player1 Name </label>
                            <input type="name" id="player1" className="form-control" onChange={this.handleOnChange}/>
                            <label>player2 Name </label>
                            <input type="name" id="player2" className="form-control" onChange={this.handleOnChange}/>
                        </div>
                        <button onClick={this.handleOnClick} className="btn btn-log">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;