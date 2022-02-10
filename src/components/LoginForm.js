import React, { useState } from "react";
import axios from "axios";
import ImgPath from "../assest/logo.png";

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
      await axios.get("https://api.chatengine.io/chats", {
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
      <div className="container w-full h-full">
      <div className="header bg-violet-900 flex flex-row justify-center h-5/6 py-2 sm:py-4">
        <span className="text-base sm:text-2xl sm:font-bold text-white">
          MacroSoft Teams
        </span>
      </div>
      <div className="h-[100vh] w-full flex flex-col justify-center items-center bg-zinc-800">
        <div className="text-lg text-white md:text-3xl xl:text-5xl font-bold ">Login Here !</div>
        <div className="form">
          <div>
            <img className="w-full h-full" src={ImgPath} alt="logo" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col px-5 justify-center items-center">
            <input
              type="text"
              value={username}
              name="username"
              placeholder="Enter Username here..."
              onChange={(e) => setUsername(e.target.value)}
              className="text-white bg-stone-900 border-2 border-white rounded-lg md:rounded-2xl px-3 py-2 mb-4 lg:mb-5 xl:mb-7 justify-center item-center w-11/12"
            />
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Enter Password here..."
              onChange={(e) => setPassword(e.target.value)}
              className="text-white bg-stone-900 border-2 border-white rounded-lg md:rounded-2xl px-3 py-2 mb-4 lg:mb-5 xl:mb-7 justify-center item-center w-11/12"
            />
            <div className="m-auto p-auto ">
              <button type="submit" className="bg-violet-700 hover:bg-violet-900 text-white px-4 py-3 mt-5 text-base sm:text-lg font-semibold  hover:border-2 hover:border-white hover:outline hover:outline-violet-900 rounded-lg">
                <span>Start Chatting !</span>
              </button>
            </div>
          </form>
          <div className={`${ error ? `visible`: `hidden`} bg-red-200 text-red-700 font-bold py-3 mt-3 sm:rounded-lg lg:rounded-xl text-center`}>{error}</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default LoginForm;
