import React, { useState } from "react";
import { Message, MessageData } from "./Message";

function generateId(): string {
  return Math.random().toString(36).substr(2);
}

const initialMessage: MessageData = {
  id: generateId(),
  author: "John Doe",
  timestamp: "5:52 PM",
  content: ["This is a sample message."],
};

export const App = () => {
  const [messages, setMessages] = useState<MessageData[]>([initialMessage]);

  const updateMessage = React.useCallback((update: MessageData) => {
    setMessages((messages) =>
      messages.map((message) => (message.id === update.id ? update : message))
    );
  }, []);

  return (
    <div className="App">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          onChangeMessage={updateMessage}
        />
      ))}
    </div>
  );
};
