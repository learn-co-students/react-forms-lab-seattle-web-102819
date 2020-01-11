import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : "",
      charLimit: 0
    };
  }

  handleChange(e){
    this.setState({
      message : e.target.value
    })
  }

  displayCharLimit(){
    let countDown = this.props.maxChars - this.state.message.length
    return(
      <p>{countDown}</p>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state !== prevState){
      console.log(this.state)
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"  value={this.state.message} onChange={event => this.handleChange(event)} name="message" id="message" />
        {this.displayCharLimit()}
      </div>
    );
  }
}

export default TwitterMessage;
