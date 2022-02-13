import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  //console.log(lastMessage);

  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
          <div
            className="message-avatar"
            style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
          />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message_attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <>
          <div
            className="message"
            style={{
              float: "left",
              backgroundColor: "#CABCDC",
              marginLeft: isFirstMessageByUser ? "4px" : "48px",
            }}
          >
            { isFirstMessageByUser ? (
              <div className="text-stone-800 text-[0.7rem] font-bold">{message?.sender?.username}</div>
            ): (
              <></>
            )}
            {message?.text}
          </div>
        </>
      )}
    </div>
  );
};

export default TheirMessage;
