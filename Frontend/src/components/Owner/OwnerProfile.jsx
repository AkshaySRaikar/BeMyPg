import React, { useState, useEffect } from 'react';

const OwnerProfile = () => {
    const [ownerData, setOwnerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch owner profile and PG details from the backend
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/OwnerProfile/',{method: "GET",credentials:"include"}); // Adjust API endpoint as needed
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setOwnerData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-6 bg-gradient-to-l from-black to-cyan-600">
            <h1 className="text-2xl font-bold text-white mb-4 text-center">Owner Profile</h1>

            {/* Owner Profile Section */}
            {ownerData && (
                <>
                    <div className=" shadow-md rounded-lg p-6 mb-6 bg-gradient-to-t from-blue-700 to-cyan-500">
                        <h2 className="text-xl font-semibold text-white mb-2">Owner Information</h2>
                        {/* <p className="text-white"><strong>Name:</strong> {ownerData.owner.name}</p> */}
                        <p className="text-white"><strong>Email:</strong> {ownerData.owner.email}</p>
                        {/* <p className="text-white"><strong>Phone:</strong> {ownerData.owner.phone}</p> */}
                    </div>

                    {/* PG Details Section */}
                    <div className="space-y-8">
                        <h2 className="text-xl font-semibold text-white mb-4">PGs Added by Owner</h2>
                        {ownerData.pgDetails.map((pg, index) => (
                            <div key={index} className="bg-gradient-to-b from-indigo-700 to-purple-700 shadow-md rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">{pg.PGname}</h3>
                                <p className="text-white"><strong>Address:</strong> {pg.Address}</p>
                                <p className="text-white"><strong>City:</strong> {pg.City}</p>
                                <p className="text-white"><strong>Phone Number:</strong> {pg.PhNumber}</p>
                                <p className="text-white"><strong>Price Range:</strong> ₹{pg.PriceRange}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default OwnerProfile;
