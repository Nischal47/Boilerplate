import { Routes, Route } from "react-router-dom";

const CompanyProfileRoutes = () => (
  <Routes>
    <Route path="/" element={<CompanyProfileRoutes />} />
  </Routes>
);

export default CompanyProfileRoutes;
