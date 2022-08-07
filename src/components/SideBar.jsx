import React from 'react';
import { useSelector } from 'react-redux';

import SideBarChatItem from './SideBarChatItem';

/* USUARIOS
_id: 62ed394bd27375996f29a004
name: "Lorenzo Vignolo"
email: "vignolo_3@hotmail.com"
password: "$2a$10$4uh.QCwTg4M0aa4I67Tfbea/0AREbwnNmQja8qROoVS7bMiFqnxUe"
online: false
__v: 0
*/

const SideBar = () => {
  const { usuarios } = useSelector((state) => state.chat);
  const { uid } = useSelector((state) => state.auth);

  return (
    <div className="inbox_chat">
      {usuarios
        .filter((user) => user.uid !== uid)
        .map((user, index) => {
          return (
            <SideBarChatItem
              key={user.uid}
              usuario={user.name}
              online={user.online}
              uid={user.uid}
            />
          );
        })}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};

export default SideBar;
