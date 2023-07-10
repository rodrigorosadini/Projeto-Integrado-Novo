import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Home } from "../pages/home/Home";
import { PrivateRoutes } from ".";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
