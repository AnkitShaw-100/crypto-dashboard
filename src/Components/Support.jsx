import React from "react";

const Support = () => {
    return (
        <div className="p-6 bg-gray-900 min-h-[91.4vh]">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-5 mx-auto w-full md:w-4/5 p-6 rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold mb-4 text-white">Support</h1>
                <p className="mb-6 text-gray-400">
                    If you have any questions or need assistance, please reach out to our
                    support team.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-white">Contact Us</h2>
                <p className="mb-1 text-gray-400">
                    Email:{" "}
                    <a href="mailto:support@cryptoui.com" className="text-blue-400 hover:underline">
                        support@cryptoui.com
                    </a>
                </p>
                <p className="mb-6 text-gray-400">
                    Phone:{" "}
                    <a href="tel:+18001234567" className="text-blue-400 hover:underline">
                        +1 (800) 123-4567
                    </a>
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-white">
                    Frequently Asked Questions
                </h2>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2 text-white">
                        How do I reset my password?
                    </h3>
                    <p className="text-gray-400">
                        To reset your password, click on the "Forgot Password" link on the
                        login page and follow the instructions.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2 text-white">
                        How do I contact customer support?
                    </h3>
                    <p className="text-gray-400">
                        You can contact customer support by emailing{" "}
                        <a href="mailto:support@cryptoui.com" className="text-blue-400 hover:underline">
                            support@cryptoui.com
                        </a>{" "}
                        or calling{" "}
                        <a href="tel:+18001234567" className="text-blue-400 hover:underline">
                            +1 (800) 123-4567
                        </a>
                        .
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2 text-white">
                        Where can I find the user manual?
                    </h3>
                    <p className="text-gray-400">
                        The user manual is available for download on our website under the
                        "Resources" section.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Support;
