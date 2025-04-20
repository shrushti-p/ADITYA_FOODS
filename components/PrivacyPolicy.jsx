import React from "react";
import Footer from "./Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      {/* Title Section */}
      <div className="title-section">
       
        <h1>Privacy Policy</h1>
        <p><a href="/" className="footer-links">Home</a> &gt; Privacy Policy</p>

        <img src="images/jamun1.png" alt="Floating jamun" className="floating-burger1" />
        <img src="images/mango.png" alt="Floating mango" className="floating-burger2" />
      </div>

      {/* Policies Section */}
      <div className="policies-section">
        <div className="policy">
          <h2 className="policy-title">Information We Collect</h2>
          <p className="policy-description">
          We collect personal information such as your name, email, phone number, billing/shipping address, and payment details (processed securely). Non-personal data includes browser type, IP address, device details, and cookies. Transaction details, including order history and payment confirmations, are also collected for order fulfillment.
          </p>
        </div>

        <div className="policy">
          <h2 className="policy-title">How We Use Your Information</h2>
          <p className="policy-description">
          Your data helps us process orders, provide customer support, and enhance your shopping experience. We use it for marketing (with your consent), website analytics, and fraud prevention. You can opt out of promotional emails anytime.
          </p>
        </div>

        <div className="policy">
          <h2 className="policy-title">Information Sharing</h2>
          <p className="policy-description">
          We do not sell or rent your data. Trusted third parties, such as payment processors and shipping partners, receive necessary information to fulfill orders. We may disclose data when required by law or to prevent fraud, ensuring all vendors comply with strict confidentiality policies.
          </p>
        </div>

        <div className="policy">
          <h2 className="policy-title">Data Security</h2>
          <p className="policy-description">
          We implement SSL encryption, secure payment gateways, and regular security audits to protect your data. While we take strong security measures, no system is completely secure, so users should also take precautions when sharing personal details.
          </p>
        </div>

        <div className="policy">
          <h2 className="policy-title">Your Rights</h2>
          <p className="policy-description">
          You have the right to access, update, or request deletion of your personal data, subject to legal obligations. To modify your data or unsubscribe from communications, contact us directly.
          </p>
        </div>

        <div className="policy">
          <h2 className="policy-title">Changes to This Policy</h2>
          <p className="policy-description">
          We may update this Privacy Policy periodically. Significant changes will be communicated on our website, and we encourage you to review it regularly
          </p>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default PrivacyPolicy;