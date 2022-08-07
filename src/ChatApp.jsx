import AppRouter from './router/AppRouter';
import Context from './components/Context';

const ChatApp = () => {
  return (
    <Context>
      <AppRouter />
    </Context>
  );
};

export default ChatApp;
