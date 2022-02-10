import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  const project_id = process.env.REACT_APP_PROJECT_ID;

  if (!localStorage.getItem("username")) {
    return (
    <div className="w-full"><LoginForm /></div>
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
    />
    </div>
  );
}

export default App;
