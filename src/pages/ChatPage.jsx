import React from 'react';
import { useSelector } from 'react-redux';
import SelectChat from '../components/SelectChat';
import InboxPeople from '../components/InboxPeople';
import Messages from '../components/Messages';

import '../css/chat-style.css';

const ChatPage = () => {
  const { chatActivo } = useSelector((state) => state.chat);

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        {chatActivo ? <Messages /> : <SelectChat />}
      </div>
    </div>
  );
};

export default ChatPage;
