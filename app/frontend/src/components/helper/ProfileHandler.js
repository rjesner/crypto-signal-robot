import { toast } from "react-toastify";
import { getAPI } from "./GetAPI";

export async function handleProfileClick({ email, password, cpf, address, telephone }, navigate) {
	try {
		const response = await fetch(getAPI() + '/api/profile', {
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
			toast.error(`Erro de servidor: ${data.message || response.statusText}`);
		}
	} catch (error) {
		toast.error(`Erro de rede: ${error.message}`);
	}
}