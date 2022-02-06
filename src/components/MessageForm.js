import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (e) => {
    e.preventDefault(); //to not do a browser refresh
    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <div>
        <input
          className="message-input"
          placeholder="Send a Message ..."
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      <div>
        <label htmlFor="upload_button">
          <span className="image-button">
            <i className="fas fa-image"></i>
          </span>
        </label>
        <input
          type="file"
          multiple={false}
          id="upload_button"
          className="hidden"
          onChange={handleUpload}
        />
        <button type="submit" className="send-button">
          <i className="fas fa-paper-plane send-icon"></i>
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
