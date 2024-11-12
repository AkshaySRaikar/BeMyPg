// src/components/Signup.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        console.log('Form Data:', data);
        try {
            const result = await fetch('http://localhost:3000/user/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const res = await result.text();
            console.log('Response from server:', res);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-gradient-to-l from-black to-gray-700 flex flex-col justify-center items-center p-8">
                <h2 className="text-2xl font-bold text-center text-white">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-full hover:bg-blue-800" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Signup'}
                    </button>
                </form>
            </div>
            <div className="w-1/2">
            <img 
            src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" 
            alt="Skyscrapers viewed from below with a clear sky" 
            className="w-full h-full object-cover" 
            />
        </div>
        </div>
    );
}

export default Signup;