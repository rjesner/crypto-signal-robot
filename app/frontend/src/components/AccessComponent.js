import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccessComponent = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Bitcoin', marketcap: '---', price: '---' },
        { id: 2, name: 'Ethereum', marketcap: '---', price: '---' },
        { id: 3, name: 'Solana', marketcap: '---', price: '---' },
    ]);

    const [counter, setCounter] = useState(0);

    const updateMarketCapWithCounter = async (id) => {
        try {
            const response = await fetch('http://localhost:80/api/access', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            setData(prevData =>
                prevData.map(user =>
                    user.id === id ? {...user, marketcap: data.message} : user
                )
            );
        } catch (error) {
            console.log(`Network error: ${error.message}`);
        }
    };

    const handleComponentMount = () => {
        console.log('AccessComponent has been rendered');

        const intervalId = setInterval(() => {
            updateMarketCapWithCounter(1);
        }, 4000);

        return () => clearInterval(intervalId);
    };

    useEffect(() => {
        const cleanup = handleComponentMount();

        return () => {
            if (cleanup) cleanup();
        };
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Crypto Market Data</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Market Cap</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.marketcap}</td>
                                <td>{user.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AccessComponent;