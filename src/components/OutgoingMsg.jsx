import React from 'react';
import { horaMes } from '../helpers/horaMes';
import send from '../assets/send.png';

const OutgoingMsg = ({ message }) => {
  const time = horaMes(message.createdAt);
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{message.message}</p>
        <span className="time_date">{time}</span>
      </div>
      <div className="incoming_msg_img-right">
        <img src={send} alt="sunil" />
      </div>
    </div>
  );
};

export default OutgoingMsg;
