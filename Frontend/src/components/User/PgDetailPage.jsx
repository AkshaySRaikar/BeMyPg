import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PgDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pg } = location.state || {};
    

    if (!pg) return <p className="text-center text-gray-500">No details available for this PG.</p>;
        const handleNavigateToReview = (pg) => {
            navigate('/RatingMain', { state: { pg } });
        };
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h2 className="text-3xl font-bold text-center mb-8">{pg.PGname}</h2>
            <p className="text-xl text-gray-700"><strong>City:</strong> {pg.City}</p>
            <p className="text-xl text-gray-700"><strong>Price Range:</strong> {pg.PriceRange}</p>
            <p className="text-xl text-gray-700"><strong>Contact:</strong> {pg.PhNumber}</p>
            <p className="text-xl text-gray-700"><strong>Address:</strong> {pg.Address}</p>

            {/* Display rooms */}
            <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">Rooms</h3>
                {pg.Rooms.map((room, index) => (
                    <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
                        <p><strong>Room Type:</strong> {room.RoomType}</p>
                        <p><strong>Room Price:</strong> ₹{room.RoomPrice}</p>
                        <p><strong>Vacant Rooms:</strong> {room.VacantRooms}</p>
                    </div>
                ))}
            </div>

            {/* Display images if available */}
            {pg.Images && pg.Images.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4">Images</h3>
                    <img
                        src={pg.Images[0]}
                        alt={`${pg.PGname} Image`}
                        className="w-full h-80 object-cover rounded-md"
                    />
                </div>
            )}
                <button
                onClick={() => handleNavigateToReview(pg)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                >
                Submit Review
                </button>
            </div>
        );
    };

export default PgDetailPage;

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const PgListPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { pgData } = location.state || { pgData: [] };

//     const handleNavigateToReview = (pg) => {
//         navigate('/RatingMain', { state: { pg } });
//     };

//     return (
//         <div className="bg-gray-100 min-h-screen p-8">
//             <h2 className="text-3xl font-bold text-center mb-8">Available PGs in {pgData[0]?.City}</h2>
            
//             {pgData.length > 0 ? (
//                 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//                     {pgData.map((pg, index) => (
//                         <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
//                             <h3 className="text-xl font-semibold text-blue-600 mb-2">{pg.PGname}</h3>
//                             <p className="text-gray-700"><strong>City:</strong> {pg.City}</p>
//                             <p className="text-gray-700"><strong>Price Range:</strong> {pg.PriceRange}</p>
//                             <p className="text-gray-700"><strong>Contact:</strong> {pg.PhNumber}</p>
                            
//                             {pg.Images && pg.Images.length > 0 && (
//                                 <img
//                                     src={pg.Images[0]}  // Display the first image as an example
//                                     alt={`${pg.PGname} Image`}
//                                     className="w-full h-40 object-cover rounded-md mt-4"
//                                 />
//                             )}

//                             {/* Submit Review Button */}
                            
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center text-gray-500">No PGs available for the selected city.</p>
//             )}
//         </div>
//     );
// };

// export default PgListPage;
