import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleProfileClick } from './helper/ProfileHandler';
import {useAuth} from "../AuthContext";
import useFetchRobotSuggestion from "./helper/FetchRobotSuggestion";

const ProfileComponent = () => {
    const { email } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cpf: '',
        address: '',
        telephone: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleProfileClick(formData, navigate);
    };

    useFetchRobotSuggestion(email);

    return (
        <div className="auth-wrapper">
            <div className="auth-inner profile-form">
                <h3>Editar Perfil</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cpf"
                            placeholder="Insira seu CPF"
                            value={formData.cpf}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Endereço</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Insira seu endereço"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telefone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telephone"
                            placeholder="Insira seu telefone"
                            value={formData.telephone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Insira seu email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Insira sua senha"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileComponent;