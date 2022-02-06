import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const project_id = process.env.REACT_APP_PROJECT_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": project_id,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats/latest/{{5}}/", {
        headers: authObject,
      });

      //if succeded
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (error) {
      setError("Sorry! Incorrect Credentials ");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="form">
          <h1 className="title">MS_CHAT-APP</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Start Chatting !</span>
              </button>
            </div>
          </form>
          <h1 className="text-red-500 text-bold">{error}</h1>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
