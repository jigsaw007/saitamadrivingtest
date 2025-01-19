import React from "react";
import Navbar from "../components/Navbar";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Privacy Policy
        </h1>
        <div className="p-4 shadow rounded" style={{ backgroundColor: "#f9f9f9" }}>
          <p>
            Thank you for choosing the Saitama Driving Test platform. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains our approach to privacy and data usage.
          </p>

          <h3 className="mt-4 text-primary">1. Information We Collect</h3>
          <p>We do not collect any personal information. This includes, but is not limited to:</p>
          <ul>
            <li>Names</li>
            <li>Email addresses</li>
            <li>Usernames</li>
            <li>Cookies</li>
            <li>Device or usage data</li>
          </ul>
          <p>
            As this is a simple quiz web app, no registration is required, and no data is collected or stored.
          </p>

          <h3 className="mt-4 text-primary">2. How We Use Your Information</h3>
          <p>
            Since no personal or usage data is collected, we do not use or process any user information.
          </p>

          <h3 className="mt-4 text-primary">3. Sharing of Information</h3>
          <p>
            As no data is collected, there is no information to share with third parties.
          </p>

          <h3 className="mt-4 text-primary">4. Data Security</h3>
          <p>
            While we do not collect any personal information, we strive to ensure the platform is secure and free from vulnerabilities that could compromise your experience.
          </p>

          <h3 className="mt-4 text-primary">5. Cookies</h3>
          <p>We do not use cookies or any similar tracking technologies.</p>

          <h3 className="mt-4 text-primary">6. Third-Party Links</h3>
          <p>
            Our platform may contain links to external websites. We are not responsible for the privacy practices or content of these third-party sites. Please review their privacy policies before engaging with them.
          </p>

          <h3 className="mt-4 text-primary">7. Changes to This Policy</h3>
          <p>
            We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting. Please review this page periodically for updates.
          </p>

          <p className="text-center mt-5 text-success fw-bold">
            Thank you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
