import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      sms: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div style={styles.chat}>
      <ChatHeader name="Nurs Agai" />
      <p className="agai">Э ищяк где домашка (10:30)</p>
      <MessageList messages={messages} />
      <MessageInput onSend={addMessage} />
    </div>
  );
};

const styles = {
  chat: {
    width: "300px",
    height: "400px",
    border: "2px solid red",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
};

export default Chat;
