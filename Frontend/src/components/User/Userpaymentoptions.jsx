import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can add any validation or processing here
    if (!selectedOption) {
      alert("Please select a payment option.");
      return;
    }

    // Navigate to the 'Userpaymentportal' page when 'Proceed to Payment' is clicked
    navigate('/Userpaymentportal'); // You can change this path to wherever you need to navigate
  };

  return (
    <div className="h-screen bg-gradient-to-l from-gray-600 to-black">
      <div className="max-w-md mx-auto p-8 bg-gray-900 shadow-lg rounded-lg align-center">
        <h2 className="text-white text-2xl font-semibold mb-6">Select Payment Option</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">
              <input
                type="radio"
                value="Credit Card"
                checked={selectedOption === 'Credit Card'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Credit Card
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">
              <input
                type="radio"
                value="Debit card"
                checked={selectedOption === 'Debit card'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Debit Card
            </label>  
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">
              <input
                type="radio"
                value="Bank Transfer"
                checked={selectedOption === 'Bank Transfer'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Bank Transfer
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentOptions;
