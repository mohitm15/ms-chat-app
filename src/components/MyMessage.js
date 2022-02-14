import axios from "axios";
import React, { useState } from "react";

const MyMessage = (props) => {
  // auth credentials
  const authuser = localStorage.getItem("username");
  const authpassword = localStorage.getItem("password");
  const project_id = process.env.REACT_APP_PROJECT_ID;

  const { chatId, message } = props;

  const [isMessageDeleted, setIsMessageDeleted] = useState(false);

  //console.log("from mymessage = "+chatId)

  const handleDelete = async (msgID) => {
    const authObject = {
      "Project-ID": project_id,
      "User-Name": authuser,
      "User-Secret": authpassword,
    };

    try {
      await axios.delete(
        `https://api.chatengine.io/chats/${chatId}/messages/${msgID}/`,
        {
          headers: authObject,
        }
      );
      setIsMessageDeleted(true);
      console.log("Deleted succesfully");
    } catch (error) {
      console.error(error);
    }
  };

  // if (message?.attachments?.length > 0) {
  //   return (
  //     <img
  //       src={message.attachments[0].file}
  //       alt="message_attachment"
  //       className="message-image"
  //       style={{ float: "right" }}
  //     />
  //   );
  // }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
        display: isMessageDeleted ? "none" : "block",
      }}
    >
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message_attachment"
          className="message-image"
          style={{ float: "right" }}
        />
      ) : (
        message?.text
      )}
      <span>
        <button
          onClick={() => handleDelete(message?.id)}
          className=" text-purple-700 text-base p-1 ml-1 rounded-md hover:bg-gray-900"
        >
          <i className="fas fa-trash"></i>
        </button>
      </span>
    </div>
  );
};

export default MyMessage;
