import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PerfilPage from "../pages/PerfilPagee/PerfilPage";
import RegistrationAddressPage from "../pages/RegistrationAddressPage/RegistrationAddressPage";
import ResultPage from "../pages/ResultPage/ResultPage";
import SignupPage from "../pages/SignUpPage/SignupPage";
import WelcomePage from "../pages/WecolmePage/WelcomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/feed" element={<HomePage />} />
        <Route path="/address" element={<RegistrationAddressPage />} />
        <Route path="/feed/restaurant/:restaurantId" element={<ResultPage />} />
        <Route path="/profile" element={<PerfilPage />} />
      </Routes>
    </BrowserRouter>
  );
}
