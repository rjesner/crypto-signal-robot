import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLoginClick } from "./helper/LoginHandler";

export default function Login() {
	const [formState, setFormState] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});

	const navigate = useNavigate();

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormState({
			...formState,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password, rememberMe } = formState;
		await handleLoginClick({ email, password, rememberMe }, navigate);
	};

	const { email, password, rememberMe } = formState;

	return (
		<form onSubmit={handleSubmit}>
			<h3>Login</h3>
			<div className="mb-3">
				<label>Endereço de e-mail</label>
				<input
					type="email"
					className="form-control"
					name="email"
					value={email}
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
					value={password}
					onChange={handleChange}
					placeholder="Insira a senha"
				/>
			</div>
			<div className="mb-3">
				<div className="custom-control custom-checkbox">
					<input
						type="checkbox"
						className="custom-control-input"
						id="customCheck1"
						name="rememberMe"
						checked={rememberMe}
						onChange={handleChange}
					/>
					<label className="custom-control-label" htmlFor="customCheck1">
						Lembrar-me
					</label>
				</div>
			</div>
			<div className="d-grid">
				<button type="submit" className="btn btn-primary">
					Carregar
				</button>
			</div>
			<p className="forgot-password text-right">
				<a href="#">Esqueceu a senha?</a>
			</p>
		</form>
	);
}