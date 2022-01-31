import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, messages, userName } = props;

  const chat = chats && chats[activeChat];

  //   console.log("CHAT - "+ Object.keys(chat))
  //   console.log( "MESSAGE - "+ Object.keys(messages) )
  //   console.log( "USERNAME - "+userName)

  const renderMessage = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      console.log(message);
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      console.log(isMyMessage);

      return (
        <div
          key={`msg_${index}`}
          className="bg-gray-900 text-white text-lg py-1"
        >
          <div className="bg-green-300 ">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage message={messages[lastMessageKey]} />
            )}
          </div>
          <div
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
            className="px-3 py-1"
          >
            as
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading .... !";
  return (
    <div className="bg-black">
      <div className="container">
        <div className="text-base sm:text-3xl border-2 text-white text-center font-bold py-4 font-mono">
          {chat?.title}
        </div>
        <div className="text-xl bg-gray-800 text-purple-100 font-bold">
          {chat.people.map((item) => `${item.person.username}`)}
        </div>
      </div>
      {renderMessage()}
      <div className="bg-blue-200 p-2">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
