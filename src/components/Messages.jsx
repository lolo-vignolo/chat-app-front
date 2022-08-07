import React from 'react';
import { useSelector } from 'react-redux';

import IncomingMsg from './IncomingMsg';
import OutgoingMsg from './OutgoingMsg';
import SendMsg from './SendMsg';

/* 
_id :62efa2adc4db1212d774ad03
message:"hola mundo"
from:62ed394bd27375996f29a004
to:62ee5c2b62161efcccb049f6
createdAt: 2022-08-07T11:31:57.154+00:00
updatedAt:2022-08-07T11:31:57.154+00:00
__v: 0
*/

const Messages = () => {
  const { mensajes } = useSelector((state) => state.chat);
  const { uid } = useSelector((state) => state.auth);

  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history" id="messagesDown">
        {mensajes.map((msg) => {
          if (msg.from === uid) {
            return <OutgoingMsg key={msg._id} message={msg} />;
          } else {
            return <IncomingMsg key={msg._id} message={msg} />;
          }
        })}
        {/* <IncomingMsg />
        <OutgoingMsg /> */}
      </div>
      {/* <!-- Historia Fin --> */}

      <SendMsg />
    </div>
  );
};

export default Messages;
