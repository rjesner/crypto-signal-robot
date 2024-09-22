import { toast } from "react-toastify";
import { getAPI } from "./GetAPI";

export const handleLoginClick = async ({ email, password }, navigate, setEmail) => {
    try {
        const response = await fetch(getAPI() + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success('Login com sucesso');
            setEmail(email);
            navigate('/access');
        } else {
            toast.error(`Erro de servidor: ${data.message || response.statusText}`);
        }
    } catch (error) {
        toast.error(`Erro de rede: ${error.message}`);
    }
};