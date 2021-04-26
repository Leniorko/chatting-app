import React from "react";

/**
 * It was supposed to be inputs for messages. But all went wrong
 */
export class MessageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  render() {
    return (
      <form action="" className="message-input">
        <input
          type="text"
          name=""
          id=""
          className="message-input__text"
          value={this.state.message}
          onChange={(e) => {
            this.setState({ message: e.target.value });
          }}
        />
        <button className="message-input__submit-button"
        onClick={
          (e)=>{
            // this.props.sendMessage(this.state.message)
            console.log("sdaidwpkk");
          }
        }>
        
          Submit
        </button>
      </form>
    );
  }
}
