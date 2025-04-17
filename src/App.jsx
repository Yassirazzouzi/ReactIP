import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const MainContent = () => (
    <>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Roadmap />
    </>
  );

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/features" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/how-to-use" element={<Collaboration />} />
        </Routes>
        <Footer />
        <ButtonGradient />
      </div>
    </>
  );
};

export default App;
