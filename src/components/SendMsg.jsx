import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SendMsg = () => {
  const [message, setMessage] = useState('');

  const { socket } = useSelector((state) => state.socket);
  const { chatActivo } = useSelector((state) => state.chat);
  const { uid } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length === 0) {
      return;
    }

    socket?.emit('personal-message', {
      message,
      to: chatActivo,
      from: uid,
    });
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="Menssage..."
            name="message"
            value={message}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default SendMsg;
