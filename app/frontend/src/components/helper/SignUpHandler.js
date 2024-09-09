import { toast } from 'react-toastify';
import { getAPI } from "./GetAPI";

export async function handleSignUpClick({ firstName, lastName, email, password }, navigate) {
	try {
		const response = await fetch(getAPI() + '/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
			}),
		});

		const data = await response.json();

		if (response.ok) {
			toast.success('Registro com sucesso');
			navigate('/login');
		} else {
			toast.error(`Server error: ${data.message || response.statusText}`);
		}
	} catch (error) {
		toast.error(`Network error: ${error.message}`);
	}
}