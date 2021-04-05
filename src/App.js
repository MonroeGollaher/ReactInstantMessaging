import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '5425b970-e61b-4dfa-9cfa-34c4cd96b23c';

const App = () => {

  return (
    <ChatEngine
      height='100vh'
      projectID={projectID}
      userName={'bobby'}
      userSecret={'123123'}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;