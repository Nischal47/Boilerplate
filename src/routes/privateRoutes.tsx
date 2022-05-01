import { Navigate, Route, Routes } from 'react-router-dom';
import CompanyProfileRoutes from '../modules/companyProfile/routes';
import SuperUserRoutes from '../modules/superUser/routes';
import ROLES from '../enums/roles';

interface PrivateRoutesProps {
  isLoggedIn: boolean;
  role: number;
}

const PrivateRoute = (props: PrivateRoutesProps) => {
  const { role } = props;
  const { isLoggedIn } = props;
  const routeToAuth = 'auth';

  return (
    <Routes>
      {role === ROLES.ADMIN && (
        <Routes>
          <Route path="/admin" element={<SuperUserRoutes />} />
          <Route path="/" element={<CompanyProfileRoutes />} />
        </Routes>
      )}
      {role === ROLES.USER && (
        <Route path="/" element={<CompanyProfileRoutes />} />
      )}
      <Route
        path="*"
        element={isLoggedIn ? <p>Not Found</p> : <Navigate to={routeToAuth} />}
      />
    </Routes>
  );
};

export default PrivateRoute;
