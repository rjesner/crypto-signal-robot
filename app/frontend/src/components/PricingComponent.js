import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingComponent = () => {
    const navigate = useNavigate();

    const handleBuy = (price) => {
        navigate('/buy', { state: { price } });
    };

    return (
        <div>
            <h1>Assinatura</h1>
            <p>Preços para assinatura do robô de sinais:</p>
            <div className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="pricing-box">
                            <h3 className="pricing-title">Normal</h3>
                            <p className="price">R$25/mês</p>
                            <ul className="list-unstyled">
                                <li>Mensagens: 10</li>
                                <li>Estatísticas extras: 3</li>
                            </ul>
                            <button className="btn btn-primary" onClick={() => handleBuy('R$25')}>Comprar</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing-box featured">
                            <h3 className="pricing-title">VIP</h3>
                            <p className="price">R$50/mês</p>
                            <ul className="list-unstyled">
                                <li>Mensagens: 50</li>
                                <li>Estatísticas extras: 5</li>
                            </ul>
                            <button className="btn btn-primary" onClick={() => handleBuy('R$50')}>Comprar</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing-box">
                            <h3 className="pricing-title">VIP Premium</h3>
                            <p className="price">R$100/mês</p>
                            <ul className="list-unstyled">
                                <li>Mensagens: ∞</li>
                                <li>Estatísticas extras: 7</li>
                            </ul>
                            <button className="btn btn-primary" onClick={() => handleBuy('R$100')}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingComponent;