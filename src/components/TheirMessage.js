import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  return (
    <div>
      <div className="float-left rounded-lg bg-yellow-400 text-red-700 px-2 ml-2">
        {message?.text}
      </div>
    </div>
  );
};

export default TheirMessage;
