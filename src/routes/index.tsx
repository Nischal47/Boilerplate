import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutes from './publicRoutes';
import PrivateRoute from './privateRoutes';
import Role from '../enums/roles';

const MainRoute = () => {
  const [isLoggedIn] = useState<boolean>(false);
  const [role] = useState<string>(Role.user);
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
