import React, { useState } from "react";
import axios from "axios";
import  ImgPath  from "../assest/logo.jpg";

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
      <div className="header bg-violet-900 flex flex-row justify-center h-5/6 py-2 sm:py-4">
          <span className="text-base sm:text-2xl sm:font-bold text-white">MacroSoft Teams</span>
        </div>
      <div className="h-[100vh] w-full flex justify-center items-center bg-zinc-800">
        
        <div className="form">
          <div>
            {/* <img src={ImgPath} alt="logo" /> */}
          </div>
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
