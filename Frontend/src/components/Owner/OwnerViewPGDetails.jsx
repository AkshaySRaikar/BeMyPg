// src/components/Owner/OwnerViewPGDetails.jsx
import React, { useEffect, useState } from 'react';

const OwnerPGDetails = () => {
    const [pgDetails, setPgDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch PG details from API
    useEffect(() => {
        const fetchPGDetails = async () => {
        try {
            const response = await fetch('http://localhost:3000/ViewPgDetails', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            });
            if (!response.ok) {
            throw new Error('Failed to fetch PG details');
            }
            const data = await response.json();
            setPgDetails(data);
        } catch (error) {
            console.error("Error fetching PG details:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchPGDetails();
    }, []);

    // Handle loading and error states
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!pgDetails) {
        return <div>No PG details available.</div>;
    }

    return (
        <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">PG Details</h1>

        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">{pgDetails.PGname}</h2>
            <p className="text-gray-600">Phone: {pgDetails.PhNumber}</p>
            <p className="text-gray-600">Address: {pgDetails.Address}</p>
            <p className="text-gray-600">City: {pgDetails.City}</p>
            <p className="text-gray-600">Price Range: ₹{pgDetails.PriceRange}</p>
        </div>

        <div>
            <h3 className="text-xl font-bold mb-3 text-gray-700">Rooms</h3>
            {pgDetails.Rooms.map((room) => (
            <div key={room._id.$oid} className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-lg font-semibold text-gray-800">Room Type: {room.RoomType}</p>
                <p className="text-gray-600">Price: ₹{room.RoomPrice}</p>
                <p className="text-gray-600">Vacant Rooms: {room.VacantRooms}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default OwnerPGDetails;
