import React from "react";

const Support = () => {
  return (
    <div className="p-6 bg-gray-900 min-h-[92%] flex items-center justify-center">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white w-full max-w-3xl p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:bg-gray-700">
        
        <h1 className="text-4xl font-bold mb-6 text-center">Support</h1>
        <p className="text-center mb-6 text-gray-400">
          Need help? Contact us using the details below.
        </p>

        {/* Contact Information */}
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-400">
          Email:{" "}
          <a href="mailto:support@cryptoui.com" className="text-blue-400 hover:underline">
            support@cryptoui.com
          </a>
        </p>
        <p className="text-gray-400 mb-6">
          Phone:{" "}
          <a href="tel:+18001234567" className="text-blue-400 hover:underline">
            +1 (800) 123-4567
          </a>
        </p>

        {/* FAQ Section */}
        <h2 className="text-2xl font-semibold mb-3">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-white">How do I reset my password?</h3>
            <p className="text-gray-400">Click "Forgot Password" on the login page and follow the instructions.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">How do I contact customer support?</h3>
            <p className="text-gray-400">
              Email us at{" "}
              <a href="mailto:support@cryptoui.com" className="text-blue-400 hover:underline">
                support@cryptoui.com
              </a>{" "}
              or call{" "}
              <a href="tel:+18001234567" className="text-blue-400 hover:underline">
                +1 (800) 123-4567
              </a>.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Where can I find the user manual?</h3>
            <p className="text-gray-400">It is available under the "Resources" section on our website.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
