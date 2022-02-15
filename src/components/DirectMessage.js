import React, { useState } from "react";
import { getOrCreateChat } from "react-chat-engine";

const DirectMessage = (creds) => {
  //const { creds } = props;
  const [username, setUsername] = useState("");

  console.log("cred from dm -" + JSON.stringify(creds));

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  return (
    <>
      <div>
        <input
          placeholder="Username"
          value={username}
          className="bg-yellow-400 z-10"
          onChange={(e) => setUsername(e.target.value)}
        />
        {creds?.userName}
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    </>
  );
};

export default DirectMessage;
