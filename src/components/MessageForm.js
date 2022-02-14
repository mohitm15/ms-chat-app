import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  //console.log("from message form= "+chatId);


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const project_id = process.env.REACT_APP_PROJECT_ID;



  const authObject = {
    "Project-ID": project_id,
    "User-Name": username,
    "User-Secret": password,
  };

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

  const handleLogout = () => {
    localStorage.removeItem("username", username);
    localStorage.removeItem("password", password);
    window.location.reload();
  }

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
      <div className="flex flex-row">
      <div>
        <label htmlFor="upload_button">
          <span className="image-button">
            <i className="far fa-image"></i>
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
          <i className="far fa-paper-plane send-icon"></i>
        </button>
      </div>
      <div className="me-auto">
      <button onClick={handleLogout}  className="send-button">
          <i className="fas fa-power-off send-icon"></i>
        </button>
      </div>
      </div>
    </form>
  );
};

export default MessageForm;
