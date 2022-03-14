import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRoute from '../modules/auth/routes';

interface PublicRouteProps {
  isLoggedIn: boolean;
}

const PublicRoutes = (props: PublicRouteProps) => {
  const { isLoggedIn } = props;
  return (
    <Routes>
      <Route path="/*" element={<AuthRoute />} />
      <Route
        path="*"
        element={isLoggedIn ? <Navigate to="/" /> : <p>Not Found</p>}
      />
    </Routes>
  );
};
export default PublicRoutes;
