// // import React, { useState, useEffect } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';

// // const OwnerPGDetails = () => {
// //     const [pgDetails, setPgDetails] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [showMap, setShowMap] = useState(false);
// //     const [coordinates, setCoordinates] = useState(null);

// //     // Fetch PG details from API
// //     useEffect(() => {
// //         const fetchPGDetails = async () => {
// //             try {
// //                 const response = await fetch('http://localhost:3000/ViewPgDetails/', {
// //                     method: 'GET',
// //                     credentials: "include",
// //                 });
// //                 if (!response.ok) {
// //                     throw new Error('Failed to fetch PG details');
// //                 }
// //                 const data = await response.json();
// //                 setPgDetails(data);
// //             } catch (error) {
// //                 console.error("Error fetching PG details:", error);
// //                 setError(error.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //         fetchPGDetails();
// //     }, []);

// //     useEffect(() => {
// //         console.log("Updated showMap:", showMap);
// //         console.log("Updated coordinates:", coordinates);
// //     }, [showMap, coordinates]);
// //     // Handle loading and error states
// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     if (error) {
// //         return <div>Error: {error}</div>;
// //     }

// //     if (!pgDetails) {
// //         return <div>No PG details available.</div>;
// //     }

// //      // Function to fetch coordinates from LocationIQ API
// //     const fetchCoordinates = async (address) => {
// //         const apiKey = 'pk.9d5d1b1a66d30cb2e99aa6bcb5031f7a'; // Replace with your actual LocationIQ API key
// //         const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

// //         try {
// //         const response = await fetch(url);
// //         const json = await response.json();
// //         if (json && json.length > 0) {
// //             const lat = json[0].lat;
// //             const lon = json[0].lon;
// //             console.log(`Coordinates: Latitude = ${lat}, Longitude = ${lon}`);
// //             return { lat, lon };
// //         } else {
// //             throw new Error('No results found');
// //         }
// //         } catch (err) {
// //         console.error('Error fetching coordinates:', err);
// //         throw err;
// //         }
// //     };

// //     // Handle showing the map after fetching coordinates
// //     const handleShowLocation = async (pg) => {
// //         console.log("clicked")
// //         console.log(pg.Address)
// //         if (pg?.Address) {
// //         try {
// //             console.log(pg.Address)
// //             const coordinates = await fetchCoordinates(`${pg.Address},${pg.City}`);
// //             setCoordinates([coordinates.lat, coordinates.lon]);
// //             setShowMap(true);
// //             console.log(showMap ,coordinates)
// //         } catch (error) {
// //             console.error('Error fetching location:', error);
// //         }
// //         }
        
// //     };

// //     return (
// //         <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-700 shadow-lg">
// //             <h1 className="text-3xl font-bold mb-4 text-white flex flex-col items-center">PG Details</h1>

// //             {pgDetails.map((pg, index) => (
// //                 <div key={index} className="mb-6 flex flex-col items-center">
// //                     <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
// //                     <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
// //                     <p className="text-white text-xl">Address: {pg.Address}</p>
// //                     <p className="text-white text-xl">City: {pg.City}</p>
// //                     <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>

// //                     <div className="flex flex-col w-full mt-4">
// //                         <h3 className="text-xl font-bold mb-3 text-white">Rooms</h3>
// //                         {pg.Rooms.map((room, roomIndex) => (
// //                             <div key={roomIndex} className="mb-4 p-4 bg-gray-900 rounded-lg shadow">
// //                                 <p className="font-semibold text-white text-2xl">Room Type: {room.RoomType}</p>
// //                                 <p className="text-white text-xl">Price: ₹{room.RoomPrice}</p>
// //                                 <p className="text-white text-xl">Vacant Rooms: {room.VacantRooms}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                     <button onClick={() => handleShowLocation(pg)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
// //                         Show Location
// //                     </button>
// //                     {/* Map rendering */}
// //                     {showMap && coordinates && (
// //                     <div className="mt-6">
// //                         <MapContainer key={JSON.stringify(coordinates)} center={coordinates} zoom={13} style={{ width: '100%', height: '400px' }}>
// //                             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// //                             <Marker position={coordinates}>
// //                                 <Popup>{pg.PGname}</Popup>
// //                             </Marker>
// //                         </MapContainer>
// //                     </div>
// //                 )}

// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default OwnerPGDetails;

// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const OwnerPGDetails = () => {
//     const [pgDetails, setPgDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showMap, setShowMap] = useState(false);
//     const [coordinates, setCoordinates] = useState(null);

//     // Fetch PG details from API
//     useEffect(() => {
//         const fetchPGDetails = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/ViewPgDetails/', {
//                     method: 'GET',
//                     credentials: "include",
//                 });
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch PG details');
//                 }
//                 const data = await response.json();
//                 setPgDetails(data);
//             } catch (error) {
//                 console.error("Error fetching PG details:", error);
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchPGDetails();
//     }, []);

//     // Log changes in showMap and coordinates
//     useEffect(() => {
//         console.log("Updated showMap:", showMap);
//         console.log("Updated coordinates:", coordinates);
//     }, [showMap, coordinates]);

//     // Function to fetch coordinates from LocationIQ API
//     const fetchCoordinates = async (address) => {
//         const apiKey = 'pk.9d5d1b1a66d30cb2e99aa6bcb5031f7a'; // Replace with your actual LocationIQ API key
//         const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

//         try {
//             const response = await fetch(url);
//             const json = await response.json();
//             if (json && json.length > 0) {
//                 const lat = json[0].lat;
//                 const lon = json[0].lon;
//                 console.log(`Coordinates: Latitude = ${lat}, Longitude = ${lon}`);
//                 return { lat, lon };
//             } else {
//                 throw new Error('No results found');
//             }
//         } catch (err) {
//             console.error('Error fetching coordinates:', err);
//             throw err;
//         }
//     };

//     // Handle showing the map after fetching coordinates
//     const handleShowLocation = async (pg) => {
//         console.log("clicked");
//         if (pg?.Address) {
//             try {
//                 console.log("Fetching coordinates for:", pg.Address);
//                 const coordinates = await fetchCoordinates(`${pg.Address},${pg.City}`);
//                 setCoordinates([coordinates.lat, coordinates.lon]);
//                 setShowMap(true);
//             } catch (error) {
//                 console.error('Error fetching location:', error);
//             }
//         }
//     };

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
//         <div className="p-8 min-h-screen mx-auto bg-gradient-to-l from-black to-gray-700 shadow-lg">
//             <h1 className="text-3xl font-bold mb-4 text-white flex flex-col items-center">PG Details</h1>

//             {pgDetails.map((pg, index) => (
//                 <div key={index} className="mb-6 flex flex-col items-center">
//                     <h2 className="text-2xl font-semibold text-white">{pg.PGname}</h2>
//                     <p className="text-white text-xl">Phone: {pg.PhNumber}</p>
//                     <p className="text-white text-xl">Address: {pg.Address}</p>
//                     <p className="text-white text-xl">City: {pg.City}</p>
//                     <p className="text-white text-xl">Price Range: ₹{pg.PriceRange}</p>

//                     <div className="flex flex-col w-full mt-4">
//                         <h3 className="text-xl font-bold mb-3 text-white">Rooms</h3>
//                         {pg.Rooms.map((room, roomIndex) => (
//                             <div key={roomIndex} className="mb-4 p-4 bg-gray-900 rounded-lg shadow">
//                                 <p className="font-semibold text-white text-2xl">Room Type: {room.RoomType}</p>
//                                 <p className="text-white text-xl">Price: ₹{room.RoomPrice}</p>
//                                 <p className="text-white text-xl">Vacant Rooms: {room.VacantRooms}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <button onClick={() => handleShowLocation(pg)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
//                         Show Location
//                     </button>
//                     {/* Map rendering */}
//                     {showMap && coordinates && (
//                     <div className="mt-6">
//                         <MapContainer key={JSON.stringify(coordinates)} center={coordinates} zoom={13} style={{ width: '100%', height: '400px' }}>
//                             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                             <Marker position={coordinates}>
//                                 <Popup>{pg.PGname}</Popup>
//                             </Marker>
//                         </MapContainer>
//                     </div>
//                 )}

//                 </div>
//             ))}
//         </div>
//     );
// };

// export default OwnerPGDetails;

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OwnerPGDetails = () => {
    const [pgDetails, setPgDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const [coordinates, setCoordinates] = useState(null);

    // Fetch PG details from the backend
    useEffect(() => {
        const fetchPGDetails = async () => {
        try {
            const response = await fetch('http://localhost:3000/ViewPgDetails', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials:"include",
            });
            if (!response.ok) {
            throw new Error('Failed to fetch PG details');
            }
            const data = await response.json();
            setPgDetails(data);
        } catch (error) {
            console.error('Error fetching PG details:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchPGDetails();
    }, []);
    // Function to fetch coordinates from LocationIQ API
    const fetchCoordinates = async (address) => {
        const apiKey = 'pk.9d5d1b1a66d30cb2e99aa6bcb5031f7a'; // Replace with your actual LocationIQ API key
        const url = `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(address)}&format=json`;

        try {
        const response = await fetch(url);
        const json = await response.json();
        if (json && json.length > 0) {
            const lat = json[0].lat;
            const lon = json[0].lon;
            console.log(`Coordinates: Latitude = ${lat}, Longitude = ${lon}`);
            return { lat, lon };
        } else {
            throw new Error('No results found');
        }
        } catch (err) {
        console.error('Error fetching coordinates:', err);
        throw err;
        }
    };

    // Handle showing the map after fetching coordinates
    const handleShowLocation = async (pg) => {
        console.log("clicked")
        if (pg?.Address) {
        try {
            console.log(pg.Address)
            const coordinates = await fetchCoordinates(`${pg.Address},${pg.City}`);
            setCoordinates([coordinates.lat, coordinates.lon]);
            setShowMap(true);
        } catch (error) {
            console.error('Error fetching location:', error);
        }
        }
        
    };

    // Loading, error, and empty PG details states
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
        <div className="p-8 max-w-3xl mx-auto bg-gradient-to-l from-black to-gray-700 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-white">PG Details</h1>
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
                    <button onClick={() => handleShowLocation(pg)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                        Show Location
                    </button>
                    {/* Map rendering */}
                    {showMap && coordinates && (
                        <div className="mt-6" style={{ width: '100%', height: '400px' }}>
                            <MapContainer center={coordinates} zoom={15} style={{ width: '100%', height: '100%' }}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={coordinates}>
                                    <Popup>{pg.PGname}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
};

export default OwnerPGDetails;
