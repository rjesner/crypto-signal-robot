import { toast } from "react-toastify";
import { getAPI } from "./GetAPI";

export async function handleLoginClick({ email, password }, navigate) {
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
			navigate('/access');
		} else {
			toast.error(`Server error: ${data.message || response.statusText}`);
		}
	} catch (error) {
		toast.error(`Network error: ${error.message}`);
	}
}