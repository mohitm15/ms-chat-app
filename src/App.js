import { useState } from "react";
import "./App.css";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
// import DirectMessage from "./components/DirectMessage";

function App() {
  const project_id = process.env.REACT_APP_PROJECT_ID;
  const [username, setUsername] = useState("");

  if (!localStorage.getItem("username")) {
    return (
      <div className="w-full">
        <LoginForm />
      </div>
    );
  }

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    console.log("cred from app -" + JSON.stringify(creds));
    return (
      // <DirectMessage creds={creds} />
      <>
        <div>
          <h3 className="text-white text-center bg-violet-700 pt-2 text-lg font-bold">
            Direct Message Here{" "}
          </h3>
          <div className="py-2 px-1 flex flex-row items-center justify-evenly bg-violet-700">
            <div className="p-1">
              <input
                placeholder="Type user here..."
                value={username}
                className="px-2 py-1 rounded-md"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <button
                className="text-white bg-violet-800 py-1 px-2 rounded-md hover:bg-violet-900 hover:border-2 hover:border-white font-bold "
                onClick={() => createDirectChat(creds)}
              >
                Chat
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <ChatEngine
        height="100vh"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        projectID={project_id}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </div>
  );
}

export default App;
