import { Routes, Route } from "react-router-dom";
import SuperUserPage from "../companyProfile/pages/superUserPage";

const SuperUserRoutes = () => (
  <Routes>
    <Route path="/" element={<SuperUserPage />} />
  </Routes>
);

export default SuperUserRoutes;
