import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

function App() {
  return (
    <div className="App">
      <ChatEngine
        height='100vh'
        publicKey={'5425b970-e61b-4dfa-9cfa-34c4cd96b23c'}
        userName={'bobsburgers'}
        userSecret={'Password123!'}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
      />
    </div>
  );
}

export default App;
