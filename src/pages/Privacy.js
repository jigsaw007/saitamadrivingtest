import React from "react";
import Navbar from "../components/Navbar";
import { FaShieldAlt, FaLock, FaLink, FaCookie, FaInfoCircle, FaExclamationTriangle,FaCheckCircle } from "react-icons/fa"; // Importing icons

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <FaShieldAlt className="me-2 text-primary" /> Privacy Policy
        </h1>
        <div className="p-4 shadow rounded" style={{ backgroundColor: "#f9f9f9" }}>
          <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
            Thank you for choosing the <strong>Saitama Driving Test Platform</strong>. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we handle your data and ensure your privacy while using our platform.
          </p>

          {/* Section 1: Information We Collect */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaInfoCircle className="me-2 text-info" /> 1. Information We Collect
            </h3>
            <p>
              We are committed to maintaining your privacy. As such, we do not collect any personal information from users. This includes, but is not limited to:
            </p>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> Names</li>
              <li><FaCheckCircle className="text-success me-2" /> Email addresses</li>
              <li><FaCheckCircle className="text-success me-2" /> Usernames</li>
              <li><FaCheckCircle className="text-success me-2" /> Cookies or tracking data</li>
              <li><FaCheckCircle className="text-success me-2" /> Device or usage data</li>
            </ul>
            <p>
              Since this is a simple quiz web application, no registration is required, and no personal or usage data is collected or stored.
            </p>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaInfoCircle className="me-2 text-warning" /> 2. How We Use Your Information
            </h3>
            <p>
              Since no personal or usage data is collected, we do not use or process any user information. The platform is designed to provide a seamless and private experience for all users.
            </p>
          </section>

          {/* Section 3: Sharing of Information */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaExclamationTriangle className="me-2 text-danger" /> 3. Sharing of Information
            </h3>
            <p>
              As no data is collected, there is no information to share with third parties. Your privacy is fully respected, and no data is transmitted outside the platform.
            </p>
          </section>

          {/* Section 4: Data Security */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaLock className="me-2 text-secondary" /> 4. Data Security
            </h3>
            <p>
              While we do not collect any personal information, we take the security of our platform seriously. We strive to ensure that the platform is secure and free from vulnerabilities that could compromise your experience. Regular security checks are conducted to maintain the integrity of the platform.
            </p>
          </section>

          {/* Section 5: Cookies */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaCookie className="me-2 text-warning" /> 5. Cookies
            </h3>
            <p>
              We do not use cookies or any similar tracking technologies. Your browsing experience on our platform is entirely private, and no data is stored on your device.
            </p>
          </section>

          {/* Section 6: Third-Party Links */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaLink className="me-2 text-info" /> 6. Third-Party Links
            </h3>
            <p>
              Our platform may contain links to external websites for additional resources or information. Please note that we are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before engaging with them.
            </p>
          </section>

          {/* Section 7: Changes to This Policy */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaInfoCircle className="me-2 text-primary" /> 7. Changes to This Policy
            </h3>
            <p>
              We reserve the right to update this Privacy Policy at any time. Any changes will be effective immediately upon posting on the platform. We encourage you to review this page periodically to stay informed about how we are protecting your privacy.
            </p>
          </section>

          {/* Section 8: Contact Information */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaInfoCircle className="me-2 text-success" /> 8. Contact Information
            </h3>
          </section>

          <p className="text-center mt-5 text-success fw-bold">
            Thank you for using our platform, and we wish you the best of luck with your Driving License test!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;