import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Click me",
      clicked: false,
    };
  }

  // handler for button
  handleClick = () => {
    if (!this.state.clicked) {
      this.setState({clicked: true});
      this.setState({buttonText: "Thanks!"});
    } else {
      this.setState({clicked: false});
      this.setState({buttonText: "Click me"});
    } 
  };

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    );
  }
}