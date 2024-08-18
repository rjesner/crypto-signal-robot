import React, { Component } from "react";
import { handleLoginClick } from "./LoginHandler"; // Import the function

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			rememberMe: false,
		};
	}

	handleChange = (event) => {
		const { name, value, type, checked } = event.target;
		this.setState({
			[name]: type === "checkbox" ? checked : value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { email, password, rememberMe } = this.state;
		handleLoginClick({ email, password, rememberMe });
	};

	render() {
		const { email, password, rememberMe } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Login</h3>
				<div className="mb-3">
					<label>Endereço de e-mail</label>
					<input
						type="email"
						className="form-control"
						name="email"
						value={email}
						onChange={this.handleChange}
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
						onChange={this.handleChange}
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
							onChange={this.handleChange}
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
}