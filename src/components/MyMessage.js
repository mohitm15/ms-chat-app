import React from "react";
import { deleteMessage } from "react-chat-engine";

const MyMessage = ({ message }, props) => {
  const { chatId, creds } = props;

  const handleDelete = () => {
    deleteMessage(creds, chatId, message?.id);
  };

  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message_attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  // {
  //   "id":455890,
  //   "sender":{
  //     "username":"GMmohit",
  //     "first_name":"Mohit",
  //     "last_name":"Maroliya",
  //     "avatar":"https://api-chat-engine-io.s3.amazonaws.com/avatars/potrait_rKDI2hb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZA5RH3EC2MM47GFP%2F20220213%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220213T141431Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1d5e0ec2418701210532824ba90af5f6366d17b7fa1f9dfadb6783cd8efdbfd6",
  //     "custom_json":"{}",
  //     "is_online":true
  //   },
  //   "created":"2022-02-12 12:23:04.745937+00:00",
  //   "attachments":[],
  //   "sender_username":"undefined",
  //   "text":"----",
  //   "custom_json":"{}"
  // }

  console.log("now = " + message?.sender?.custom_json);
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message?.text}
      <span>
        <button onClick={handleDelete} className="bg-yellow-300">
          <i className="far fa-trash"></i>
        </button>
      </span>
    </div>
  );
};

export default MyMessage;
