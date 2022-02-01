import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  console.log(lastMessage);

  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username;

  return (
    <div>
      {
        isFirstMessageByUser &&  (
          <div style={{backgroundImage: `url(${message?.sender?.avatar})`}} /> 
        )
      }
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message_attachment"
          className="w-2/5 h-3/5 float-right"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <div className="float-left rounded-lg bg-yellow-400 text-red-700 px-2 ml-2">
          {message?.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
