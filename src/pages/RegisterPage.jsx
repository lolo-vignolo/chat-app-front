import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { thunkRegister } from '../actions/authActions';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onImputChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const disabledbutton = () => {
    if (
      user.name.length === 0 ||
      user.email.length === 0 ||
      user.password.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;

    if (password.length < 6) {
      return Swal.fire(
        'Error',
        'La contraseña debe tener al menos 6 caracteres',
        'error'
      );
    }

    const result = await dispatch(thunkRegister(name, email, password));
    if (!result) {
      Swal.fire('Error', 'El usuario ya existe', 'error');
    }
  };

  return (
    <>
      <form
        className="login100-form validate-form flex-sb flex-w"
        onSubmit={handleRegisterSubmit}
      >
        <span className="login100-form-title mb-3">Chat - Registro</span>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="text"
            name="name"
            placeholder="Nombre"
            value={user.name}
            onChange={onImputChange}
          />
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={onImputChange}
          />
          <span className="focus-input100"></span>
        </div>

        <div className="wrap-input100 validate-input mb-3">
          <input
            className="input100"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={onImputChange}
          />
          <span className="focus-input100"></span>
        </div>

        <div className="row mb-3">
          <div className="col text-right">
            <Link to="/auth/login" href="login.html" className="txt1">
              Ya tienes cuenta?
            </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button
            type="submit"
            className="login100-form-btn"
            disabled={disabledbutton()}
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
