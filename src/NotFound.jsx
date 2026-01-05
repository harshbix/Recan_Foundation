import React from 'react';
import Button from './components/Button';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg-cream text-center px-4">
            <div className="space-y-6 max-w-lg">
                <h1 className="text-9xl font-heading font-black text-gray-200">404</h1>
                <h2 className="text-3xl font-heading font-bold text-primary">Page Not Found</h2>
                <p className="text-gray-600 text-lg">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>
                <div className="pt-6">
                    <Button variant="primary" onClick={() => window.location.href = '/'}>
                        Return Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
