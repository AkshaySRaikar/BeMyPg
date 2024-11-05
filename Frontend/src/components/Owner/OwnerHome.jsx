// src/pages/OwnerHomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OwnerHomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Owner Dashboard</h1>
            <p className="text-lg mb-8 text-gray-600">Manage your PG listings and rooms.</p>
            <div className="space-y-4">
            <button
                className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => navigate('/AddNewPgOwner')}
            >
                Add Your PG
            </button>
            <button
                className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/AddRoomOwner')}
            >
                Add/Update Room
            </button>
            <button
                className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/Owner/ViewPgDetails')}
            >
                View PG Details 
            </button>
            </div>
        </div>
        </div>
    );
};

export default OwnerHomePage;
