import React from 'react';
import { useNavigate } from 'react-router-dom';

const OwnerHomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-repeat" style={{ backgroundImage: 'url("https://i0.wp.com/picjumbo.com/wp-content/uploads/abstract-image-glass-city-skyscrapers-free-photo.jpeg?w=600&quality=80")' }}>
        <div className="text-center p-8 bg-gradient-to-t from-black to-gray-400 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-white">User Dashboard</h1>
            <p className="text-lg mb-8 text-white">Manage your PG listings and rooms.</p>
            <div className="space-y-4">
            <button
                className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => navigate('/UserFindPgByCity')}
            >
                Find PG
            </button>
            {/* <button
                className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/AddRoomOwner')}
            >
                Add/Update Room
            </button> */}
            {/* <button
                className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/Owner/ViewPgDetails')}
            >
                View PG Details 
            </button> */}
            <button
                className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/UserViewProfile')}
            >
                View My Profile 
            </button>
            <button
                className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => navigate('/UserBookings')}
            >
                View Customer Bookings
            </button>
            </div>
        </div>
        </div>
    );
};

export default OwnerHomePage;
