import "./Message.css";
import React from "react";
import blankProfile from "./assets/profile.png";

export interface MessageData {
  id: string;
  author: string;
  content: string[];
  timestamp: string;
  avatar?: string;
}

export interface MessageProps {
  message: MessageData;
  onChangeMessage: (message: MessageData) => void;
}

export const Message: React.FC<MessageProps> = ({ message }) => (
  <div className="Message">
    <div className="Message__avatar">
      <img src={message.avatar ?? blankProfile} alt={message.author} />
    </div>

    <div className="Message__body">
      <div className="Message__title">
        <span className="Message__author">{message.author}</span>
        <span className="Message__timestamp">{message.timestamp}</span>
      </div>

      {message.content.map((content, i) => (
        <p key={i} className="Message__content">
          {content}
        </p>
      ))}
    </div>
  </div>
);
