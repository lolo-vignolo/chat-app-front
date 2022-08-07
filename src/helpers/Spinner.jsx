import React from 'react';

const Spinner = () => {
  return (
    <div
      className="spinner-grow text-success"
      role="status"
      style={{
        marginLeft: '50%',
        marginTop: '40%',
        width: '3rem',
        height: '3rem',
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
