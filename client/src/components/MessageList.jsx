import React from "react";
import { Message } from "./Message";

//Container for messages
export class MessageList extends React.Component {
  placeholderVar = 0;

  render() {
    return (
      <div className="message-list">
        {this.placeholderVar === 0 ? (
          <div className="message-list__placeholder">Messages will be here</div>
        ) : (
          <Message></Message>
        )}
      </div>
    );
  }
}
