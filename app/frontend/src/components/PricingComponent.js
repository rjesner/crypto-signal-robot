import React from 'react';

const PricingComponent = () => {
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
								<li>Mensagens do robô: 10</li>
								<li>Estatísticas adicionais: 3</li>
							</ul>
							<a href="#" className="btn btn-primary">Comprar</a>
						</div>
					</div>
					<div className="col-md-4">
						<div className="pricing-box featured">
							<h3 className="pricing-title">VIP</h3>
							<p className="price">R$50/mês</p>
							<ul className="list-unstyled">
								<li>Mensagens do robô: 50</li>
								<li>Estatísticas adicionais: 5</li>
							</ul>
							<a href="#" className="btn btn-primary">Comprar</a>
						</div>
					</div>
					<div className="col-md-4">
						<div className="pricing-box">
							<h3 className="pricing-title">VIP Premium</h3>
							<p className="price">R$100/mês</p>
							<ul className="list-unstyled">
								<li>Mensagens do robô: ∞</li>
								<li>Estatísticas adicionais: 7</li>
							</ul>
							<a href="#" className="btn btn-primary">Comprar</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PricingComponent;