import React, { Component } from "react";
import { handleSignUpClick } from "./SignUpHandler";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        handleSignUpClick({ firstName, lastName, email, password });
    };

    render() {
        const { firstName, lastName, email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Cadastro</h3>
                <div className="mb-3">
                    <label>Primeiro nome</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                        placeholder="Primeiro nome"
                    />
                </div>
                <div className="mb-3">
                    <label>Último nome</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                        placeholder="Último nome"
                    />
                </div>
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