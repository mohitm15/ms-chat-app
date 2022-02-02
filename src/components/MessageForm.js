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
    <form
      className="form relative flex flex-row justify-between items-center"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          className="form-input p-1 border-xs border-gray-600"
          placeholder="Send a Message ..."
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
      <div>
        <label htmlFor="upload_button">
          <span className="bg-blue-400 px-2 py-2 rounded-lg ml-2 border-2 border-black hover:bg-blue-500">
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
        <button
          type="submit"
          className="send_button bg-blue-400 px-2 py-1 rounded-lg ml-2 border-2 border-black hover:bg-blue-500"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
