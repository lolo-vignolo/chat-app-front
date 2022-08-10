import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SelectChat from '../components/SelectChat';
import InboxPeople from '../components/InboxPeople';
import Messages from '../components/Messages';

import '../css/chat-style.css';
import SvgGoBach from '../components/SvgGoBach';

const ChatPage = () => {
  const { chatActivo } = useSelector((state) => state.chat);
  const [show, setShow] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, []);

  if (width < 768) {
    return (
      <div className="messaging">
        <button className="open-button" onClick={() => setShow(!show)}>
          {show ? 'Welcome' : <SvgGoBach />}
        </button>
        <div className="inbox_msg">
          <div className="inbox_people" onClick={() => setShow(!show)}>
            {show ? <InboxPeople /> : null}
          </div>
          <div className="mesgs" style={{ width: '100%' }}>
            {chatActivo && <Messages />}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="messaging">
        <div className="inbox_msg">
          <div className="inbox_people">
            <InboxPeople />
          </div>
          <div className="mesgs">
            {chatActivo ? (
              <Messages />
            ) : (
              <div className="middle-screen">
                <SelectChat />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ChatPage;
