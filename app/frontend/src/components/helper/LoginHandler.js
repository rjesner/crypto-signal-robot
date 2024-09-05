import { toast } from "react-toastify";

export async function handleLoginClick({ email, password, rememberMe }, navigate) {
	try {
		const response = await fetch('http://localhost:80/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				rememberMe,
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