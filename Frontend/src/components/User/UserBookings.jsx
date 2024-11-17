// // import React, { useState, useEffect } from 'react';

// // const MyBookings = () => {
// //     const [bookings, setBookings] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         // Fetch User profile and PG details from the backend
// //         const fetchData = async () => {
// //         try {
// //             // Fetch user profile to get the email
// //             const profileResponse = await fetch('http://localhost:3000/UserProfile', {
// //             method: 'GET',
// //             credentials: 'include', // Include cookies for authentication
// //             });

// //             if (!profileResponse.ok) {
// //             throw new Error('Failed to fetch user profile');
// //             }

// //             const profileData = await profileResponse.json();
// //             const userEmail = profileData.user.email; // Extract email from the response
// //             console.log('User Email:', userEmail);

// //             // Fetch bookings using the email
// //             const bookingsResponse = await fetch('http:/localhost:3000/userBookings', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ email: userEmail }),
// //             });

// //             if (!bookingsResponse.ok) {
// //             throw new Error('Failed to fetch bookings');
// //             }

// //             const bookingsData = await bookingsResponse.json();
// //             setBookings(bookingsData);
// //             setLoading(false);
// //             console.log('boooo',bookingsData)
// //         } catch (err) {
// //             setError(err.message);
// //             setLoading(false);
// //         }
// //         };

// //         fetchData();
// //     }, []);

// //     if (loading) return <div>Loading...</div>;
// //     if (error) return <div>{error}</div>;

// //     return (
// //         <div className="my-bookings">
// //         <h2>My Bookings</h2>
// //         {bookings.length === 0 ? (
// //             <p>No bookings found.</p>
// //         ) : (
// //             <ul>
// //             {bookings.map((booking,index) => (
// //                 <li key={index}>
// //                 <p><strong>Room:</strong> {booking.roomBooked}</p>
// //                 <p><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
// //                 <p><strong>Status:</strong> {booking.bookingStatus}</p>
// //                 </li>
// //             ))}
// //             </ul>
// //         )}
// //         </div>
// //     );
// // };

// // export default MyBookings;

// import React, { useState, useEffect } from 'react';

// const MyBookings = () => {
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch User profile and PG details from the backend
//         const fetchData = async () => {
//             try {
//                 // Fetch user profile to get the email
//                 const profileResponse = await fetch('http://localhost:3000/UserProfile', {
//                     method: 'GET',
//                     credentials: 'include', // Include cookies for authentication
//                 });

//                 if (!profileResponse.ok) {
//                     throw new Error('Failed to fetch user profile');
//                 }

//                 const profileData = await profileResponse.json();
//                 const userEmail = profileData.user.email; // Extract email from the response
//                 console.log('User Email:', userEmail);

//                 // Fetch bookings using the email
//                 const bookingsResponse = await fetch('http://localhost:3000/userBookings', { // Corrected URL
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ email: userEmail }),
//                     credentials: "include",
//                 });

//                 if (!bookingsResponse.ok) {
//                     throw new Error('Failed to fetch bookings');
//                 }

//                 const bookingsData = await bookingsResponse.json();
//                 setBookings(bookingsData);
//                 setLoading(false);
//                 console.log('Bookings Data:', bookingsData);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div className="my-bookings p-4">
//             <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
//             {bookings.length === 0 ? (
//                 <p>No bookings found.</p>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {bookings.map((booking, index) => (
//                         <div
//                             key={index}
//                             className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//                         >
//                             <div className="p-6">
//                                 <h3 className="text-xl font-semibold mb-2">Room: {booking.roomBooked}</h3>
//                                 <p className="text-gray-600 mb-2"><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
//                                 <p className={`text-sm font-medium ${booking.bookingStatus === 'confirmed' ? 'text-green-500' : booking.bookingStatus === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>
//                                     <strong>Status:</strong> {booking.bookingStatus}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyBookings;


import React, { useState, useEffect } from 'react';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [scheduledVisits, setScheduledVisits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch User profile and PG details from the backend
        const fetchData = async () => {
            try {
                // Fetch user profile to get the email
                const profileResponse = await fetch('http://localhost:3000/UserProfile', {
                    method: 'GET',
                    credentials: 'include', // Include cookies for authentication
                });

                if (!profileResponse.ok) {
                    throw new Error('Failed to fetch user profile');
                }

                const profileData = await profileResponse.json();
                const userEmail = profileData.user.email; // Extract email from the response
                console.log('User Email:', userEmail);

                // Fetch bookings using the email
                const bookingsResponse = await fetch('http://localhost:3000/userBookings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: userEmail }),
                    credentials: "include",
                });

                if (!bookingsResponse.ok) {
                    throw new Error('Failed to fetch bookings');
                }

                const bookingsData = await bookingsResponse.json();
                setBookings(bookingsData);

                // Fetch scheduled visits using the email
                const visitsResponse = await fetch('http://localhost:3000/userScheduledVisits', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: userEmail }),
                    credentials: "include",
                });

                if (!visitsResponse.ok) {
                    throw new Error('Failed to fetch scheduled visits');
                }

                const visitsData = await visitsResponse.json();
                setScheduledVisits(visitsData);
                setLoading(false);
                console.log('Scheduled Visits:', visitsData);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="my-bookings p-4">
            <h2 className="text-2xl font-bold mb-6">My Bookings and Scheduled Visits</h2>

            {/* Display Scheduled Visits */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Scheduled Visits</h3>
                {scheduledVisits.length === 0 ? (
                    <p>No scheduled visits found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {scheduledVisits.map((visit, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">Visit on: {new Date(visit.visitDate).toLocaleDateString()}</h3>
                                    <p className="text-gray-600 mb-2"><strong>Name:</strong> {visit.name}</p>
                                    <p className="text-gray-600 mb-2"><strong>Phone:</strong> {visit.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Display Bookings */}
            <div>
                <h3 className="text-xl font-semibold mb-4">My Bookings</h3>
                {bookings.length === 0 ? (
                    <p>No bookings found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((booking, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">Room: {booking.roomBooked}</h3>
                                    <p className="text-gray-600 mb-2"><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
                                    <p className={`text-sm font-medium ${booking.bookingStatus === 'confirmed' ? 'text-green-500' : booking.bookingStatus === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                                        <strong>Status:</strong> {booking.bookingStatus}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookings;
