import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Audio } from 'react-loader-spinner';

const AccessComponent = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Bitcoin', market_cap: '---', price: '---' },
        { id: 2, name: 'Ethereum', market_cap: '---', price: '---' },
        { id: 3, name: 'Solana', market_cap: '---', price: '---' },
    ]);
    const [loading, setLoading] = useState(true);

    const updateWithCounter = async () => {
        try {
            const response = await fetch('http://localhost:80/api/access', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            const values = data.message.split('|');

            setData(prevData => {
                return prevData.map(user => {
                    let updatedUser = {...user};
                    switch (user.id) {
                        case 1:
                            updatedUser = {
                                ...updatedUser,
                                market_cap: values[0],
                                price: values[1]
                            };
                            break;
                        case 2:
                            updatedUser = {
                                ...updatedUser,
                                market_cap: values[2],
                                price: values[3]
                            };
                            break;
                        case 3:
                            updatedUser = {
                                ...updatedUser,
                                market_cap: values[4],
                                price: values[5]
                            };
                            break;
                        default:
                            break;
                    }
                    return updatedUser;
                });
            });

            setLoading(false);
        } catch (error) {
            console.log(`Network error: ${error.message}`);
            setLoading(false);
        }
    };

    useEffect(() => {
        updateWithCounter();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Crypto Market Data</h2>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                    />
                </div>
            ) : (
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
                                    <td>{user.market_cap}</td>
                                    <td>{user.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AccessComponent;