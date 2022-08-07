import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setChatActive, thunkMessagesFromDb } from '../actions/chatActions';
import { fetchWithToken } from '../helpers/fetch';
import { scrollBottom } from '../helpers/scrollBottom';

const SideBarChatItem = ({ usuario, online, uid }) => {
  const dispatch = useDispatch();
  const { chatActivo } = useSelector((state) => state.chat);

  const activeChat = async () => {
    dispatch(setChatActive(uid));

    //cargo todos los mensajes de este chat

    const messages = await fetchWithToken(`messages/${uid}`);
    dispatch(thunkMessagesFromDb(messages.messages));
    scrollBottom('messagesDown');
  };

  return (
    <div className={`chat_list ${uid === chatActivo && 'active_chat'}`}>
      <div className="chat_people" onClick={() => activeChat()}>
        <div className="chat_img">
          <img
            src="https://image.pngaaa.com/603/5170603-middle.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{usuario}</h5>
          {online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarChatItem;
