import React, { useState } from "react";
import { handleSignUpClick } from "./helper/SignUpHandler";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
	const [formState, setFormState] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { firstName, lastName, email, password } = formState;
		await handleSignUpClick({ firstName, lastName, email, password }, navigate);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Cadastro</h3>
			<div className="mb-3">
				<label>Primeiro nome</label>
				<input
					type="text"
					className="form-control"
					name="firstName"
					value={formState.firstName}
					onChange={handleChange}
					placeholder="Primeiro nome"
				/>
			</div>
			<div className="mb-3">
				<label>Último nome</label>
				<input
					type="text"
					className="form-control"
					name="lastName"
					value={formState.lastName}
					onChange={handleChange}
					placeholder="Último nome"
				/>
			</div>
			<div className="mb-3">
				<label>Endereço de e-mail</label>
				<input
					type="email"
					className="form-control"
					name="email"
					value={formState.email}
					onChange={handleChange}
					placeholder="Insira o e-mail"
				/>
			</div>
			<div className="mb-3">
				<label>Senha</label>
				<input
					type="password"
					className="form-control"
					name="password"
					value={formState.password}
					onChange={handleChange}
					placeholder="Insira a senha"
				/>
			</div>
			<div className="d-grid">
				<button type="submit" className="btn btn-primary">
					Registrar
				</button>
			</div>
			<p className="forgot-password text-right">
				Já registrado, <a href="/login">fazer login</a>?
			</p>
		</form>
	);
}