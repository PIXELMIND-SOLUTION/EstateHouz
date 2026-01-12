import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last updated: January 2026
        </p>

        <h2 className="font-semibold text-lg mb-2">
          1. Acceptance of Terms
        </h2>
        <p>
          By using this <strong>Estatehouz</strong> app, you agree to comply with these Terms & Conditions.
        </p>

        <h2 className="font-semibold text-lg mt-5 mb-2">
          2. User Accounts
        </h2>
        <p>
          Users must log in using a valid mobile number verified via OTP.
        </p>

        <h2 className="font-semibold text-lg mt-5 mb-2">
          3. Product Listings
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Users can list their own products for sale</li>
          <li>Users can browse and buy products listed by others</li>
          <li>All product information must be accurate and lawful</li>
        </ul>

        <h2 className="font-semibold text-lg mt-5 mb-2">
          4. Location-Based Listings
        </h2>
        <p>
          The app displays nearby products, houses, and apartments based on user
          location. We do not guarantee availability or accuracy of listings.
        </p>

        <h2 className="font-semibold text-lg mt-5 mb-2">
          5. Prohibited Activities
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Posting fake or misleading listings</li>
          <li>Harassment or misuse of other users</li>
          <li>Unauthorized access or data misuse</li>
        </ul>

        <h2 className="font-semibold text-lg mt-5 mb-2">
          6. Account Termination
        </h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these terms.
        </p>

        <h2 className="font-semibold text-lg mt-5 mb-2">
          7. Liability
        </h2>
        <p>
          We are not responsible for disputes, transactions, or outcomes between
          buyers and sellers.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
