import React, { Component } from 'react';
import Board from './components/board';

class App extends Component {
  state = { playerTurn: 'x' } 
  handleTurn = () =>{
    const playerTurn = this.state.playerTurn;
    if( playerTurn === 'x'){
      this.setState({playerTurn: 'o'});
    }else if( playerTurn === 'o'){
      this.setState({playerTurn: 'x'});
    }
  }
  render() { 
    return (
      <div className='App'>
        <h1>Tic-Tac-Toe</h1>
        <h2>{this.state.playerTurn} Turn</h2>
        <Board
        playerTurn={this.state.playerTurn}
        switchPlayer={this.handleTurn}
        ></Board>
      </div>
    );
  }
}
 
export default App;
