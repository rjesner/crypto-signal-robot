import React, { Component } from "react";
export default class SignUp extends Component {
	render() {
		return (
			<form>
				<h3>Cadastro</h3>
				<div className="mb-3">
					<label>Primeiro nome</label>
					<input
						type="text"
						className="form-control"
						placeholder="Primeiro nome"
					/>
				</div>
				<div className="mb-3">
					<label>Último nome</label>
					<input type="text" className="form-control" placeholder="Último nome" />
				</div>
				<div className="mb-3">
					<label>Endereço de e-mail</label>
					<input
						type="email"
						className="form-control"
						placeholder="Insira o e-mail"
					/>
				</div>
				<div className="mb-3">
					<label>Senha</label>
					<input
						type="password"
						className="form-control"
						placeholder="Insira a senha"
					/>
				</div>
				<div className="d-grid">
					<button type="submit" className="btn btn-primary">
						Registrar
					</button>
				</div>
				<p className="forgot-password text-right">
					Já registrado, <a href="/sign-in">fazer login</a>?
				</p>
			</form>
		);
	}
}
