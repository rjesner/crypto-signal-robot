import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileComponent = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-inner profile-form">
                <h3>Editar Perfil</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" className="form-control" id="name" placeholder="Insira seu nome" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Endereço</label>
                        <input type="text" className="form-control" id="address" placeholder="Insira seu endereço" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telefone</label>
                        <input type="tel" className="form-control" id="telephone" placeholder="Insira seu telefone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Insira seu email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" id="password" placeholder="Insira sua senha" />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileComponent;