import React from "react";
import Navbar from "../components/Navbar";
import { FaExclamationCircle, FaGavel, FaLock, FaInfoCircle, FaUserShield, FaCheckCircle } from "react-icons/fa"; // Importing icons

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <FaGavel className="me-2 text-primary" /> Terms and Conditions
        </h1>
        <div className="p-4 shadow rounded" style={{ backgroundColor: "#f9f9f9" }}>
          <p className="text-center mb-4" style={{ fontSize: "18px", fontFamily: "'Roboto', sans-serif" }}>
            Welcome to the <strong>Karimen Test Platform</strong>! By accessing and using this website, you agree to the following terms and conditions. Please read them carefully before proceeding.
          </p>

          {/* Section 1: Acceptance of Terms */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaCheckCircle className="me-2 text-success" /> 1. Acceptance of Terms
            </h3>
            <p>
              By using this website, you agree to be bound by these terms and conditions, as well as our <strong>Privacy Policy</strong>. If you do not agree with any part of these terms, you must not use this platform.
            </p>
          </section>

          {/* Section 2: User Responsibilities */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaUserShield className="me-2 text-warning" /> 2. User Responsibilities
            </h3>
            <ul>
              <li><FaCheckCircle className="text-success me-2" /> You must use the platform for lawful purposes only.</li>
              <li><FaCheckCircle className="text-success me-2" /> Do not share or distribute the content of this website without prior authorization.</li>
              <li><FaCheckCircle className="text-success me-2" /> You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li><FaCheckCircle className="text-success me-2" /> You must not engage in any activity that disrupts or interferes with the platform's functionality.</li>
            </ul>
          </section>

          {/* Section 3: Use of Content */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaInfoCircle className="me-2 text-info" /> 3. Use of Content
            </h3>
            <p>
              The quiz questions, tips, and resources provided on this platform are for <strong>educational purposes only</strong>. Unauthorized use, reproduction, or distribution of any material on this site may violate copyright, trademark, and other laws. You may only use the content for personal, non-commercial purposes.
            </p>
          </section>

          {/* Section 4: Accuracy of Information */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaExclamationCircle className="me-2 text-danger" /> 4. Accuracy of Information
            </h3>
            <p>
              While we strive to provide accurate and up-to-date information, we do not guarantee the completeness or accuracy of the content provided. Users are encouraged to verify information as needed. We are not responsible for any errors or omissions in the content.
            </p>
          </section>

          {/* Section 5: Disclaimer of Warranties */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaExclamationCircle className="me-2 text-warning" /> 5. Disclaimer of Warranties
            </h3>
            <p>
              This platform is provided <strong>"as is"</strong> without any warranties of any kind, express or implied. We do not guarantee that the platform will be available at all times or free from errors. Your use of the platform is at your own risk.
            </p>
          </section>

          {/* Section 6: Limitation of Liability */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaLock className="me-2 text-secondary" /> 6. Limitation of Liability
            </h3>
            <p>
              We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of this platform. This includes, but is not limited to, damages for loss of data, profits, or business interruption, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* Section 7: Privacy */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaLock className="me-2 text-info" /> 7. Privacy
            </h3>
            <p>
              Your privacy is important to us. Please refer to our <strong>Privacy Policy</strong> to understand how we collect, use, and protect your personal information. By using this platform, you consent to the collection and use of your information as outlined in the Privacy Policy.
            </p>
          </section>

          {/* Section 8: Changes to Terms */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaInfoCircle className="me-2 text-warning" /> 8. Changes to Terms
            </h3>
            <p>
              We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on the platform. Continued use of the platform after changes have been made constitutes your acceptance of the updated terms.
            </p>
          </section>

          {/* Section 9: Governing Law */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaGavel className="me-2 text-primary" /> 9. Governing Law
            </h3>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the country where the platform operates. Any disputes arising from the use of this platform will be subject to the exclusive jurisdiction of the courts in that country.
            </p>
          </section>

          {/* Section 10: Contact Information */}
          <section className="mb-4">
            <h3 className="text-primary">
              <FaInfoCircle className="me-2 text-success" /> 10. Contact Information
            </h3>
            <p>
              If you have any questions or concerns about these terms and conditions, please contact us at <strong>support@karimentest.com</strong>.
            </p>
          </section>

          <p className="text-center mt-5 text-success fw-bold">
            Thank you for using our platform, and we wish you the best of luck with your Driving License test!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;