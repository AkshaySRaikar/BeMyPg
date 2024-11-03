// src/components/Signup.jsx
import React, { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Add signup logic here
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="flex min-h-screen bg-black">
            <div className="w-1/2 flex flex-col justify-center items-center bg-black p-8">
                <h1 className="text-5xl font-bold mb-4 text-white">BeMyPG</h1>
                <div className="flex mb-4">
            
                <div className="w-full max-w-md p-8 space-y-6 bg-grey-300 rounded shadow-md">
                    <h2 className="text-2xl font-bold text-center text-white">Signup</h2>
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
                            <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password</label>
                                <input
                                type="password"
                                  id="confirmPassword"
                                className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600">Signup</button>

                    </form>
                </div>
                </div>
            </div>
            <div className="w-1/2">
                <img className="object-cover h-full w-full" src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="Skyscrapers viewed from below with a clear sky background" />
            </div>
        </div>
    );
}

export default Signup;
