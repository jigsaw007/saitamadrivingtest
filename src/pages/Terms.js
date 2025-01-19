import React from "react";
import Navbar from "../components/Navbar";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Terms and Conditions
        </h1>
        <div className="p-4 shadow rounded" style={{ backgroundColor: "#f9f9f9" }}>
          <p>
            Welcome to the Karimen Test platform! By accessing and using this website, you agree to the following
            terms and conditions. Please read them carefully before proceeding.
          </p>

          <h3 className="mt-4 text-primary">1. Acceptance of Terms</h3>
          <p>By using this website, you agree to be bound by these terms and conditions, as well as our privacy policy.</p>

          <h3 className="mt-4 text-primary">2. User Responsibilities</h3>
          <ul>
            <li>You must use the platform for lawful purposes only.</li>
            <li>Do not share or distribute the content of this website without prior authorization.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          </ul>

          <h3 className="mt-4 text-primary">3. Use of Content</h3>
          <p>
            The quiz questions, tips, and resources provided are for educational purposes only. Unauthorized use of any
            material on this site may violate copyright, trademark, and other laws.
          </p>

          <h3 className="mt-4 text-primary">4. Accuracy of Information</h3>
          <p>
            While we strive to provide accurate and up-to-date information, we do not guarantee the completeness or
            accuracy of the content provided. Users are encouraged to verify information as needed.
          </p>

          <h3 className="mt-4 text-primary">5. Disclaimer of Warranties</h3>
          <p>
            This platform is provided "as is" without any warranties of any kind, express or implied. We do not
            guarantee that the platform will be available at all times or free from errors.
          </p>

          <h3 className="mt-4 text-primary">6. Limitation of Liability</h3>
          <p>
            We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of
            this platform.
          </p>

          <h3 className="mt-4 text-primary">7. Privacy</h3>
          <p>
            Your privacy is important to us. Please refer to our privacy policy to understand how we collect and use
            your information.
          </p>

          <h3 className="mt-4 text-primary">8. Changes to Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the platform constitutes your
            acceptance of the updated terms.
          </p>

          <h3 className="mt-4 text-primary">9. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the country where the platform
            operates.
          </p>

          <p className="text-center mt-5 text-success fw-bold">Thank you for using our platform and good luck with your Driving License test!</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
