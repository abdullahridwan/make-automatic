import React, { useState } from 'react';
import config from '../public/config.json';


const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);
        setStatus('');

        try {
            const response = await fetch(config.loopsEndpoint, {
                method: 'POST',
                body: new URLSearchParams({
                    email,
                    userGroup: 'Website signups',
                }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });

            if (response.ok) {
                setStatus('🚀 Thank you for signing up!');
                setEmail('');
            } else {
                const errorData = await response.json();
                setStatus(errorData.message || '😓 Something went wrong, please try again.');
            }
        } catch (error) {
            setStatus('Something went wrong, please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg flex items-center space-x-4 bg-white rounded-lg mb-4"
            >
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className={`flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${config.primaryColor}`}
                />
                <button
                    type="submit"
                    className={`my-2 px-6 py-3 mt-2 font-medium text-white rounded-lg ${isLoading ? 'bg-gray-400' : `bg-gray-900`} transition-colors`}
                >
                    {isLoading ? 'Signing up...' : 'Sign up'}
                </button>
            </form>
            {status && (
                <p className={`text-center ${status.includes('Thank') ? 'text-green-600' : 'text-red-600'}`}>
                    {status}
                </p>
            )}
        </div>
    );
};

export default NewsletterForm;
