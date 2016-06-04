import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';

// HelloMessage component - Creates a material hello message
export default class HelloMessage extends Component {
  renderLetter(query){
    const style = {
      top: "10px",
      position: "relative",
    };
    const letter = query == " "? String.fromCharCode(160) : query;
    return (<span style={style}>{letter}</span>);
  }
  renderCircles(){
    const style = {
      height: "40px",
      width: "40px",
      margin: 10,
      textAlign: 'center',
      display: 'inline-block',
    };

    const letters = this.props.message.split('');

    const circles = letters.map( (letter, i)=> {
      return (
        <Paper style={style} key={i} zDepth={2} circle={true} children={this.renderLetter(letter)} />
      );
    } );
    return circles;
  }

  render() {
    const style = {
      height: "100%",
      width: "100%",
      margin: "20px",
      textAlign: 'center',
      display: 'block',
    };

    return (
      <Paper style={style} zDepth={1} rounded={false} children={this.renderCircles()}/>
    );
  }
}
