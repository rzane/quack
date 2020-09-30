import "./Message.css";
import React from "react";
import blankProfile from "./assets/profile.png";
import { EditableText } from "./EditableText";
import { EditableImage } from "./EditableImage";

export interface MessageData {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  avatar?: string;
}

export interface MessageProps {
  message: MessageData;
  disabled?: boolean;
  onChange: (message: MessageData) => void;
  onRemove: () => void;
  onAppend: () => void;
}

export const Message: React.FC<MessageProps> = (props) => {
  const { message, disabled, onChange, onRemove, onAppend } = props;

  return (
    <div className="Message">
      <EditableImage
        alt={message.author}
        disabled={disabled}
        value={message.avatar ?? blankProfile}
        onChange={(avatar) => onChange({ ...message, avatar })}
        className="Message__avatar"
      />

      <div className="Message__body">
        <div className="Message__title">
          <EditableText
            disabled={disabled}
            value={message.author}
            onChange={(author) => onChange({ ...message, author })}
            className="Message__author"
          />
          <EditableText
            disabled={disabled}
            value={message.timestamp}
            onChange={(timestamp) => onChange({ ...message, timestamp })}
            className="Message__timestamp"
          />
        </div>

        <div className="Message__content">
          <EditableText
            disabled={disabled}
            value={message.content}
            onChange={(content) => onChange({ ...message, content })}
          />
        </div>

        {!disabled && (
          <div className="Message__actions">
            <button type="button" onClick={onAppend}>
              Append
            </button>
            <button type="button" onClick={onRemove}>
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
