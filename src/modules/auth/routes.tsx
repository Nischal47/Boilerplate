import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';

const AuthRoute = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/auth/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<p>Not found</p>} />
  </Routes>
);

export default AuthRoute;
