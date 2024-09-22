import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { handleForgotPasswordClick } from "./helper/ForgotPasswordHandler";

const ForgottenPassword = () => {
    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
		event.preventDefault();
		await handleForgotPasswordClick({email}, navigate)
		console.log("E-mail enviado para:", email);
	};

    return (
        <div>
            <h3>Esqueceu a Senha</h3>
            <p>Insira seu e-mail para receber as instruções de recuperação de senha.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Endereço de e-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleChange}
                        placeholder="Insira o e-mail"
                        required
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Enviar Instruções
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ForgottenPassword;