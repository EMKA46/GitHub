import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messages }) => {
  return (
    <div style={styles.list}>
      {messages.map((msg) => (
        <MessageItem key={msg.id} sms={msg.sms} time={msg.time} /> 
      ))}
    </div>
  );
};

const styles = {
  list: {
    flexGrow: 1,
    overflowY: "auto",
    padding: "5px",
  },
};

export default MessageList;
