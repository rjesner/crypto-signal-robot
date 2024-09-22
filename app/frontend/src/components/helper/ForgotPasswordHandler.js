import { toast } from "react-toastify";
import { getAPI } from "./GetAPI";

export const handleForgotPasswordClick = async ({ email }, navigate) => {
    try {
        const response = await fetch(getAPI() + '/api/recovery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success('Recuperação com sucesso');
            navigate('/login');
        } else {
            toast.error(`Server error: ${data.message || response.statusText}`);
        }
    } catch (error) {
        toast.error(`Network error: ${error.message}`);
    }
};