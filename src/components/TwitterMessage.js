import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      remainingCharacters: 280
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value,
      remainingCharacters: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessage} value={this.state.message}/>
        <p>Remaining characters: {this.state.remainingCharacters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
