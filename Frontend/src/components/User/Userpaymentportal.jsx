import React, { useState } from 'react';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();

   
    if (!cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all fields.');
      return;
    }

    
    setError('');

  
    alert('Payment processed successfully!');

    
  };

  return (
    <div className="h-screen bg-gradient-to-l from-gray-600 to-black">
    <div className="max-w-md mx-auto p-8 bg-gray-900 shadow-lg rounded-lg justify-center">
      <h2 className="text-white text-2xl font-semibold mb-6">Payment Page</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label className="block text-white mb-2">Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Expiry Date (MM/YY):</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Pay
        </button>
      </form>
    </div>
    </div>
  );
};

export default PaymentPage;
