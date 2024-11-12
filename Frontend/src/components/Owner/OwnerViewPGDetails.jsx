// // src/components/Owner/OwnerViewPGDetails.jsx
// import React, { useEffect, useState } from 'react';

// const OwnerPGDetails = () => {
//     const [pgDetails, setPgDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch PG details from API
//     useEffect(() => {
//         const fetchPGDetails = async () => {
//         try {
//             const response = await fetch('http://localhost:3000/ViewPgDetails', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             });
//             if (!response.ok) {
//             throw new Error('Failed to fetch PG details');
//             }
//             const data = await response.json();
//             setPgDetails(data);
//         } catch (error) {
//             console.error("Error fetching PG details:", error);
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//         };
//         fetchPGDetails();
//     }, []);

//     // Handle loading and error states
//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!pgDetails) {
//         return <div>No PG details available.</div>;
//     }

//     return (
//         <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
//         <h1 className="text-3xl font-bold mb-4 text-gray-800">PG Details</h1>

//         <div className="mb-6">
//             <h2 className="text-2xl font-semibold text-gray-700">{pgDetails.PGname}</h2>
//             <p className="text-gray-600">Phone: {pgDetails.PhNumber}</p>
//             <p className="text-gray-600">Address: {pgDetails.Address}</p>
//             <p className="text-gray-600">City: {pgDetails.City}</p>
//             <p className="text-gray-600">Price Range: ₹{pgDetails.PriceRange}</p>
//         </div>

//         <div>
//             <h3 className="text-xl font-bold mb-3 text-gray-700">Rooms</h3>
//             {pgDetails.Rooms.map((room) => (
//             <div key={room._id.$oid} className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
//                 <p className="text-lg font-semibold text-gray-800">Room Type: {room.RoomType}</p>
//                 <p className="text-gray-600">Price: ₹{room.RoomPrice}</p>
//                 <p className="text-gray-600">Vacant Rooms: {room.VacantRooms}</p>
//             </div>
//             ))}
//         </div>
//         </div>
//     );
// };

// export default OwnerPGDetails;
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
         <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-500 shadow-lg ">
            <div className="mb-6 flex justify-center align-center">
                <img
                    src="https://brandstand.com/cdn/shop/articles/FutureHotelDesignInfographic_Hero_dark.jpg?v=1593002276"
                    alt="PG Pic"
                    className="w-1/4 h-auto rounded-md"
                />
            </div>
         <h1 className="text-3xl font-bold mb-4 text-white flex flex-col items-center">PG Details</h1>

         <div className="mb-6 flex flex-col items-center">
             <h2 className="text-2xl font-semibold text-white">{pgDetails.PGname}</h2>
             <p className="text-white text-xl">Phone: {pgDetails.PhNumber}</p>
             <p className="text-white  text-xl">Address: {pgDetails.Address}</p>
             <p className="text-white text-xl">City: {pgDetails.City}</p>
             <p className="text-white text-xl">Price Range: ₹{pgDetails.PriceRange}</p>
         </div>

         <div className='flex flex-col '>
             <h3 className="text-xl font-bold mb-3 text-black">Rooms</h3>
             {pgDetails.Rooms.map((room) => (
             <div key={room._id.$oid} className="mb-4 p-4 bg-gradient-to-r from-black to-gray-500 rounded-lg shadow">
                 <p className="font-semibold text-white text-2xl">Room Type: {room.RoomType}</p>
                 <p className="text-white text-xl">Price: ₹{room.RoomPrice}</p>
                 <p className="text-white text-xl">Vacant Rooms: {room.VacantRooms}</p>
             </div>
             ))}
         </div>
        </div>
       /* <div className="p-8 max-w-3xl mx-auto bg-gradient-to-l from-black to-gray-700 shadow-lg rounded-lg">
            <div className="mb-6">
                <img
                    src="data:image/jpeg;base64,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"  // Replace this with your image URL
                    alt="PG Pic"
                    className="w-full h-auto rounded-t-lg"
                />
            </div>
        <h1 className="text-3xl font-bold mb-4 text-white">PG Details</h1>

        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">{pgDetails.PGname}</h2>
            <p className="text-white">Phone: {pgDetails.PhNumber}</p>
            <p className="text-white">Address: {pgDetails.Address}</p>
            <p className="text-white">City: {pgDetails.City}</p>
            <p className="text-white">Price Range: ₹{pgDetails.PriceRange}</p>
        </div>

        <div>
            <h3 className="text-xl font-bold mb-3 text-white">Rooms</h3>
            {pgDetails.Rooms.map((room) => (
            <div key={room._id.$oid} className="mb-4 p-4 bg-gray-900 rounded-lg shadow">
                <p className="text-lg font-semibold text-white">Room Type: {room.RoomType}</p>
                <p className="text-white">Price: ₹{room.RoomPrice}</p>
                <p className="text-white">Vacant Rooms: {room.VacantRooms}</p>
            </div>
            ))}
        </div>
        </div>*/
    );
};

export default OwnerPGDetails;