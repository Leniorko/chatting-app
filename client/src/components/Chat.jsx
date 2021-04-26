import React from "react";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";

// Component-container for chat.
// Created for extensibility of application
export class Chat extends React.Component {
  render() {
    return (
      <div className="chat-box">
        <MessageList></MessageList>
        <MessageInput sendMessage={this.props.sendMessage}></MessageInput>
      </div>
    );
  }
}
