import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutes from './publicRoutes';
import PrivateRoute from './privateRoutes';
import ROLES from '../enums/roles';

const MainRoute = () => {
  const [isLoggedIn] = useState<boolean>(false);
  const [role] = useState<number>(ROLES.USER);
  const setDefaultPath = isLoggedIn ? '/' : '/auth';

  return (
    <Routes>
      {isLoggedIn && (
        <Route
          path="/*"
          element={<PrivateRoute isLoggedIn={isLoggedIn} role={role} />}
        />
      )}
      {!isLoggedIn && (
        <Route
          path="/auth/*"
          element={<PublicRoutes isLoggedIn={isLoggedIn} />}
        />
      )}
      <Route path="*" element={<Navigate to={setDefaultPath} />} />
    </Routes>
  );
};

export default MainRoute;
