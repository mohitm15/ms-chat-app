import "./App.css";
import { ChatEngine } from "react-chat-engine";

function App() {
  const project_id = process.env.REACT_APP_PROJECT_ID;
  const user_name = process.env.REACT_APP_USERNAME;
  const user_secret = process.env.REACT_APP_USER_SECRET;

  return (
    <div className="container">
      <ChatEngine
        height="100vh"
        userName={user_name}
        userSecret={user_secret}
        projectID={project_id}
      />
    </div>
  );
}

export default App;
