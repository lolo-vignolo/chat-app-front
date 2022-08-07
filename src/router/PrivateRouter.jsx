import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  return auth.logged ? children : <Navigate to="/auth" />;
};
