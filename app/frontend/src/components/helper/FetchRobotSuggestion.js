import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { getAPI } from './GetAPI';

const useFetchRobotSuggestion = (email) => {
    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await fetch(getAPI() + '/api/robot', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${email}`,
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    console.log('Sugestão de compra recebida');
                    toast.info(data.message);
                } else {
                    console.log(`Erro de servidor: ${data.message || response.statusText}`);
                }
            } catch (error) {
                console.log(`Erro de rede: ${error.message}`);
            }
        };

        const id = setInterval(fetchSuggestions, 10000);
        return () => clearInterval(id);
    }, [email]);
};

export default useFetchRobotSuggestion;