import { horaMes } from '../helpers/horaMes';

const IncomingMsg = ({ message }) => {
  const time = horaMes(message.createdAt);
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{message.message}</p>
          <span className="time_date"> {time}</span>
        </div>
      </div>
    </div>
  );
};

export default IncomingMsg;
