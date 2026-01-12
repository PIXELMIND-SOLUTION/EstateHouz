import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last updated: January 2026
        </p>

        <p className="mb-4">
          This Privacy Policy explains how <strong>Estatehouz</strong> collects,
          uses, and protects your personal information when you use our
          application.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Mobile number for OTP-based login</li>
          <li>Name, email address, and profile image</li>
          <li>Location data to show nearby listings</li>
          <li>Product details posted by users</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Authenticate users using mobile OTP</li>
          <li>Allow users to list and manage their products</li>
          <li>Show nearby houses and apartments</li>
          <li>Enable users to browse and buy products from others</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          3. Location Information
        </h2>
        <p>
          Location access is used only to display nearby product listings. Your
          location data is not sold or shared with third parties.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          4. Data Security
        </h2>
        <p>
          We take reasonable security measures to protect your personal data
          from unauthorized access or misuse.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          5. User Control
        </h2>
        <p>
          You can update or delete your profile information anytime through the
          app settings.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
