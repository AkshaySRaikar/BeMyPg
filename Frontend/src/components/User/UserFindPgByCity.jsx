import React, { useEffect, useState } from 'react';

const CitySelection = () => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch cities from the backend
        const fetchCities = async () => {
            try {
                const response = await fetch('http://localhost:3000/UserFindPgByCity'); // Adjust API endpoint as needed
    
                if (!response.ok) {
                    throw new Error('Failed to fetch cities');
                }
                const data = await response.json();
                console.log("data",data)
                setCities(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCities();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    const onCitySelect=(city) => {
        console.log(city)
    }
    
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Select a City to Find PGs</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cities.map((city, index) => (
                    <div
                        key={index}
                        onClick={() => onCitySelect(city)}
                        className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                    >
                        <h2 className="text-xl font-semibold">{city}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CitySelection;
