import React from "react";

// Layout for one message
export class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <div className="message__username"></div>
        <div className="message__content"></div>
      </div>
    );
  }
}
