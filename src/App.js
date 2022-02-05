import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const project_id = "04903c43-e194-4310-a4e7-8c48fac23c8d"
function App() {
  //const project_id = process.env.REACT_APP_PROJECT_ID;

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="container">
      <ChatEngine
        height="100vh"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        projectID={project_id}
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} /> }
      />
    </div>
  );
}

export default App;
