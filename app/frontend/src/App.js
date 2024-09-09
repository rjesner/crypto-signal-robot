import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/LoginComponent';
import SignUp from './components/SignUpComponent';
import Access from './components/AccessComponent';
import Pricing from './components/PricingComponent';
import Profile from './components/ProfileComponent';
import Chat from './components/ChatComponent';
import Buy from './components/BuyComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BoxWrapper from './components/helper/BoxWrapper';

function App() {
	return (
		<Router>
			<div className="App">
				<nav className="navbar navbar-expand-lg navbar-light fixed-top">
					<div className="container">
						<Link className="navbar-brand" to={'/login'}>
							Sistema X
						</Link>
						<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to={'/login'}>
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={'/signup'}>
										Cadastro
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="auth-wrapper">
					<BoxWrapper>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/access" element={<Access />} />
							<Route path="/pricing" element={<Pricing />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/chat" element={<Chat />} />
							<Route path="/buy" element={<Buy />} />
						</Routes>
					</BoxWrapper>
				</div>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</div>
		</Router>
	);
}

export default App;