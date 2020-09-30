import "./App.css";
import React, { useState } from "react";
import { Message, MessageData } from "./Message";
import { format } from "date-fns";

function generateId(): string {
  return Math.random().toString(36).substr(2);
}

function getTime(): string {
  return format(new Date(), "h:mm a");
}

function cloneMessage(message: MessageData): MessageData {
  return { ...message, id: generateId() };
}

const initialMessage: MessageData = {
  id: generateId(),
  author: "John Doe",
  timestamp: getTime(),
  content: "This is a sample message.",
};

export const App = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageData[]>([initialMessage]);

  const updateMessage = React.useCallback((update: MessageData) => {
    setMessages((messages) =>
      messages.map((message) => (message.id === update.id ? update : message))
    );
  }, []);

  const removeMessage = React.useCallback((id: string) => {
    setMessages((messages) => messages.filter((m) => m.id !== id));
  }, []);

  const appendMessage = React.useCallback((message: MessageData) => {
    setMessages((messages) => messages.concat([cloneMessage(message)]));
  }, []);

  return (
    <div className="App">
      <div className="App__toolbar">
        <button type="button" onClick={() => setDisabled((value) => !value)}>
          Toggle Editing
        </button>
      </div>

      <div className="App__conversation">
        {messages.map((message) => (
          <Message
            key={message.id}
            disabled={disabled}
            message={message}
            onChange={updateMessage}
            onRemove={() => removeMessage(message.id)}
            onAppend={() => appendMessage(message)}
          />
        ))}
      </div>
    </div>
  );
};
