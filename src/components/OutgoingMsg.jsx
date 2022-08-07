import React from 'react';
import { horaMes } from '../helpers/horaMes';

const OutgoingMsg = ({ message }) => {
  const time = horaMes(message.createdAt);
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{message.message}</p>
        <span className="time_date">{time}</span>
      </div>
    </div>
  );
};

export default OutgoingMsg;
