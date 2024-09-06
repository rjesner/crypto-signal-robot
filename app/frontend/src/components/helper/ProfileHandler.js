import { toast } from "react-toastify";

export async function handleProfileClick({ email, password, cpf, address, telephone }, navigate) {
	try {
		const response = await fetch('http://localhost:80/api/profile', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				cpf,
				address,
				telephone
			}),
		});

		const data = await response.json();

		if (response.ok) {
			toast.success('Alterações realizadas com sucesso');
			navigate('/access');
		} else {
			toast.error(`Server error: ${data.message || response.statusText}`);
		}
	} catch (error) {
		toast.error(`Network error: ${error.message}`);
	}
}