import React from 'react';
import { useLocation } from 'react-router-dom';
import './template/BuyComponent.css';
import paypalImage from '../assets/images/paypal.png';
import mastercardImage from '../assets/images/mastercard.png';
import visaImage from '../assets/images/visa.png';
import stripeImage from '../assets/images/stripe.png';

const BuyComponent = () => {
    const location = useLocation();
    const price = location.state?.price || 'R$0';

    return (
        <div className="container-card d-flex justify-content-center mt-5 mb-5">
            <div className="row g-3">
                <div className="col-md-6">
                    <span>Método de Pagamento</span>
                    <div className="card">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header p-0" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-light text-left collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            <div className="d-flex align-items-center">
                                                <span>Paypal</span>
                                                <img src={paypalImage} alt="Paypal"/>
                                            </div>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="card-body">
                                        <input type="text" className="form-control" placeholder="Email do Paypal" />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header p-0">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-light text-left"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            <div className="d-flex align-items-center justify-content-between">
                                                <span>Cartão de Crédito</span>
                                                <div className="icons">
                                                    <img src={mastercardImage} alt="Mastercard"/>
                                                    <img src={visaImage} alt="Visa"/>
                                                    <img src={stripeImage} alt="Stripe"/>
                                                    <img src={mastercardImage} alt="Mastercard"/>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="card-body payment-card-body">
                                        <span className="card-text">Número do Cartão</span>
                                        <div className="input">
                                            <i className="fa fa-credit-card"></i>
                                            <input type="text" className="form-control" placeholder="0000 0000 0000 0000" />
                                        </div>
                                        <div className="row mt-3 mb-3">
                                            <div className="col-md-6">
                                                <span className="card-text">Data de Validade</span>
                                                <div className="input">
                                                    <i className="fa fa-calendar"></i>
                                                    <input type="text" className="form-control" placeholder="MM/AA" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="card-text">CVC/CVV</span>
                                                <div className="input">
                                                    <i className="fa fa-lock"></i>
                                                    <input type="text" className="form-control" placeholder="000" />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-muted certificate-text">
                                            <i className="fa fa-lock"></i> Sua transação está protegida com certificado SSL
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <span>Resumo</span>
                    <div className="card">
                        <div className="d-flex justify-content-between p-3">
                            <div className="d-flex flex-column">
                                <span>Assinatura (Cobrado Mensalmente) <i className="fa fa-caret-down"></i></span>
                            </div>
                            <div className="mt-1">
                                <sup className="super-price">{price}</sup>
                                <span className="super-month">/Mês</span>
                            </div>
                        </div>
                        <hr className="mt-0 line" />
                        <div className="p-3">
                            <div className="d-flex justify-content-between mb-2">
                                <span>Bônus de Referência</span>
                                <span>-R$10</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>IVA <i className="fa fa-clock-o"></i></span>
                                <span>-20%</span>
                            </div>
                        </div>
                        <hr className="mt-0 line" />
                        <div className="p-3 d-flex justify-content-between">
                            <div className="d-flex flex-column">
                                <span>Hoje você paga (Reais Brasileiros)</span>
                                <small>Após 30 dias {price}</small>
                            </div>
                            <span>$0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyComponent;