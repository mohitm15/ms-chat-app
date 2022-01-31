import React from "react";

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message_attachment"
        className="w-2/5 h-3/5 float-right"
      />
    );
  }

  return (
    <div className="float-right rounded-lg bg-pink-900 text-silver-300 px-2 mr-2">
      {message?.text}
    </div>
  );
};

export default MyMessage;
