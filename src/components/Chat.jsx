import React, { Component } from "react";
import ChatForm from "./ChatForm";
import OnlineUsers from "./OnlineUsers";

class Chat extends Component {
  render() {
    return (
      <section>
        Chat area here
        <ChatForm />
        <OnlineUsers />
      </section>
    );
  }
}

export default Chat;
