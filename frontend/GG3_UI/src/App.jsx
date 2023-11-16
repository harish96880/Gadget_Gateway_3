import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Page404 from "./pages/404/Page404";
import EmailSentPage from "./pages/EmailSentPage/EmailSentPage";
import EmailVerified from "./pages/EmailVerification/EmailVerified";
import EmailNotVerified from "./pages/EmailVerification/EmailNotVerified";
import PasswordMail from "./pages/PasswordRest/PasswordMail";
import Reset from "./pages/PasswordRest/Reset";
import SuccessfullyPwd from "./pages/PasswordRest/SuccessfullyPwd";
import UserHomePage from "./pages/UserHomePage/UserHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/h" element={<UserHomePage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/emailSent" element={<EmailSentPage />} />
        <Route path="/emailVerified" element={<EmailVerified />} />
        <Route path="/emailNotVerified" element={<EmailNotVerified />} />
        <Route path="/passwordMailingPage" element={<PasswordMail />} />
        <Route path="/reset/password/:id" element={<Reset />} />
        <Route path="/passwordcs" element={<SuccessfullyPwd />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
