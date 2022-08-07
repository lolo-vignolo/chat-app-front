import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLogoutAuth } from '../actions/authActions';
import { clearMessages } from '../actions/chatActions';

const Searchbox = () => {
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const { name } = authState;

  const setLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearMessages());
    dispatch(setLogoutAuth());
  };

  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{name}s</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button className="btn text-danger" onClick={setLogout}>
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
