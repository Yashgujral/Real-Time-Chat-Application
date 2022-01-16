import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";
import "./App.css";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height="100vh"
            projectID="44f2e93f-51c3-433e-ad7b-1bea91fdd731"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    );
}

export default App;