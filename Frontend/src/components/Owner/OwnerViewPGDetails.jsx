import React, { useEffect, useState } from 'react';

const OwnerPGDetails = () => {
    const [pgDetails, setPgDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch PG details from API
    useEffect(() => {
        const fetchPGDetails = async () => {
            try {
                const response = await fetch('http://localhost:3000/ViewPgDetails/', {
                    method: 'GET',
                    credentials: "include",
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
        <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-700 shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-white flex flex-col items-center">PG Details</h1>

            {pgDetails.map((pg, index) => (
                <div key={index} className="mb-6 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
                    <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
                    <p className="text-white text-xl">Address: {pg.Address}</p>
                    <p className="text-white text-xl">City: {pg.City}</p>
                    <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>

                    <div className="flex flex-col w-full mt-4">
                        <h3 className="text-xl font-bold mb-3 text-white">Rooms</h3>
                        {pg.Rooms.map((room, roomIndex) => (
                            <div key={roomIndex} className="mb-4 p-4 bg-gray-900 rounded-lg shadow">
                                <p className="font-semibold text-white text-2xl">Room Type: {room.RoomType}</p>
                                <p className="text-white text-xl">Price: ₹{room.RoomPrice}</p>
                                <p className="text-white text-xl">Vacant Rooms: {room.VacantRooms}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OwnerPGDetails;
