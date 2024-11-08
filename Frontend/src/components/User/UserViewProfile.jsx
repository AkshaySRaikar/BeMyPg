import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [UserData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch User profile and PG details from the backend
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/UserProfile'); // Adjust API endpoint as needed
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUserData(data);
                console.log(data)
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
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h1>

            {/* User Profile Section */}
            {UserData && (
                <>
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">User Information</h2>
                        {/* <p className="text-gray-600"><strong>Name:</strong> {UserData.User.name}</p> */}
                        <p className="text-gray-600"><strong>Email:</strong> {UserData.user.email}</p>
                        {/* <p className="text-gray-600"><strong>Phone:</strong> {UserData.User.phone}</p> */}
                    </div>
                </>)
            }
            </div>);
                
        {/* //             PG Details Section
        //             <div className="space-y-8">
        //                 <h2 className="text-xl font-semibold text-gray-700 mb-4">PGs Added by User</h2>
        //                 {UserData.pgDetails.map((pg, index) => (
        //                     <div key={index} className="bg-white shadow-md rounded-lg p-6">
        //                         <h3 className="text-lg font-semibold text-gray-800 mb-2">{pg.PGname}</h3>
        //                         <p className="text-gray-600"><strong>Address:</strong> {pg.Address}</p>
        //                         <p className="text-gray-600"><strong>City:</strong> {pg.City}</p>
        //                         <p className="text-gray-600"><strong>Phone Number:</strong> {pg.PhNumber}</p>
        //                         <p className="text-gray-600"><strong>Price Range:</strong> ₹{pg.PriceRange}</p>
        //                     </div>
        //                 ))}
        //             </div>
        //         </>
        //     )}
        // </div> */}
    
};

export default UserProfile;
