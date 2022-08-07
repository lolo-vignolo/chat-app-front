import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { thunkLogin } from '../actions/authActions';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setUser((user) => ({
        ...user,
        rememberMe: true,
        email,
      }));
    }
  }, []);

  const onImputChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const setRememberme = () => {
    setUser({ ...user, rememberMe: !user.rememberMe });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.rememberMe) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }
    const { email, password } = user;
    const result = await dispatch(thunkLogin(email, password));
    if (!result) {
      Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
    }
  };

  //si lo hago como state se convierte en loop infinito.
  const buttonDisable = () => {
    if (user.email.length === 0 || user.password.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <form
        className="login100-form validate-form flex-sb flex-w"
        onSubmit={(e) => handleSubmit(e)}
      >
        <span className="login100-form-title mb-3">Chat - Ingreso</span>

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
          <div className="col" onClick={setRememberme}>
            <input
              className="input-checkbox100"
              id="ckb1"
              type="checkbox"
              name="rememberMe"
              checked={user.rememberMe}
              readOnly
            />
            <label className="label-checkbox100">Recordarme</label>
          </div>

          <div className="col text-right">
            <Link to="/auth/register" className="txt1">
              Nueva cuenta?
            </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button
            type="submit"
            className="login100-form-btn"
            disabled={buttonDisable()}
          >
            Ingresar
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
