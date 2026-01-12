import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

        <p className="mb-4">
          For support, feedback, or queries related to product listings or
          purchases, contact us using the details below.
        </p>

        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Email:</strong> support@Estatehouz.com
          </p>
          <p>
            <strong>Phone:</strong> +91-9573819495
          </p>
          <p>
            <strong>Working Hours:</strong> Mon – Fri, 9 AM – 6 PM
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Please mention your registered mobile number for faster assistance.
        </p>
      </div>
    </div>
  );
};

export default Contact;
