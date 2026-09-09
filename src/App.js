import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";

import Home from "./pages/Home";
import About from "./pages/About";
import Guide from "./pages/Guide";
import Honmen from "./pages/Honmen";
import Karimen from "./pages/Karimen";
import SetA from "./pages/SetA";
import SetB from "./pages/SetB";
import SetC from "./pages/SetC";
import SetD from "./pages/SetD";
import Illustrations from "./pages/Illustrations";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import RoadSigns from "./pages/RoadSigns";
import RoadSafetyAndDriving from "./pages/RoadSafetyAndDriving";
import DrivingTestVocabulary from "./pages/DrivingTestVocabulary";
import EmergencyGuide from "./pages/EmergencyGuide";
import Resources from "./pages/Resources";
import ForeignLicenseGuide from "./pages/ForeignLicenseGuide";
import SaitamaLicenseCenter from "./pages/SaitamaLicenseCenter";
import TestDayChecklist from "./pages/TestDayChecklist";
import EditorialPolicy from "./pages/EditorialPolicy";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import PaymentSuccess from "./PaymentSuccess";
import Login from "./pages/Login";
import AuthCallback from "./pages/AuthCallback";
import SeoManager from "./components/SeoManager";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <AuthProvider>
      <Router>
        <SeoManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/honmen" element={<Honmen />} />
          <Route path="/karimen" element={<Karimen />} />
          <Route path="/road-signs" element={<RoadSigns />} />
          <Route path="/setA" element={<SetA />} />
          <Route path="/setB" element={<SetB />} />
          <Route path="/setC" element={<SetC />} />
          <Route path="/setD" element={<SetD />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/road-safety-and-driving" element={<RoadSafetyAndDriving />} />
          <Route path="/driving-test-vocabulary" element={<DrivingTestVocabulary />} />
          <Route path="/emergency-guide" element={<EmergencyGuide />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/foreign-license-guide" element={<ForeignLicenseGuide />} />
          <Route path="/saitama-license-center" element={<SaitamaLicenseCenter />} />
          <Route path="/test-day-checklist" element={<TestDayChecklist />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
        <SiteFooter />
      </Router>
    </AuthProvider>
  );
}

export default App;
