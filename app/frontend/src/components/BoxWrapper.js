import React from 'react';
import { useLocation } from 'react-router-dom';

const BoxWrapper = ({ children }) => {
    const location = useLocation();
    const isAccessRoute = location.pathname === '/access';

    return (
        <div
            className="auth-inner"
            style={{
                width: isAccessRoute ? '75em' : 'auto',
                height: isAccessRoute ? '45em' : 'auto',
            }}
        >
            {children}
        </div>
    );
};

export default BoxWrapper;