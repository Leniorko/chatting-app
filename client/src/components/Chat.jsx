import React from "react";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";

export class Chat extends React.Component {
  render() {
    return (
      <div className="chat-box">
        <MessageList></MessageList>
        <MessageInput></MessageInput>
      </div>
    );
  }
}
