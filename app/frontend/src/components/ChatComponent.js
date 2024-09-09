import React, { useState, useEffect, useRef } from 'react';
import './template/ChatComponent.css';
import robotImage from '../assets/images/robot.png';
import {toast} from "react-toastify";


const ChatComponent = () => {
	const [messages, setMessages] = useState([]);
	const [intervalId, setIntervalId] = useState(null);

	const msgHistoryRef = useRef(null);

	const sendMessage = (message) => {
    const currentTime = new Date().toLocaleTimeString();
		setMessages((prevMessages) => [
			...prevMessages,
			{ text: message, type: 'outgoing', timestamp: currentTime }
		]);
	};

	useEffect(() => {
		sendMessage('Sou o robô de sinais. Informarei por este canal dicas de compra de criptomoedas.');

		const id = setInterval(async () => {
			try {
				const response = await fetch('http://localhost:80/api/robot', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				const data = await response.json();

				if (response.ok) {
					console.log('Sugestão de compra recebida');
					sendMessage(data.message)
				} else {
					console.log(`Server error: ${data.message || response.statusText}`);
				}
			} catch (error) {
				console.log(`Network error: ${error.message}`);
			}
		}, 20000);

		setIntervalId(id);

		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		if (msgHistoryRef.current) {
			msgHistoryRef.current.scrollTop = msgHistoryRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div className="chat_container">
			<h3 className="text-center">Chat robô</h3>
			<div className="messaging">
				<div className="inbox_msg">
					<div className="inbox_people">
						<div className="headind_srch">
							<div className="recent_heading">
								<h4>Histórico</h4>
							</div>
						</div>
						<div className="inbox_chat">
							{/* Chat List */}
							{messages.map((msg, index) => (
								<div className="chat_list" key={index}>
									<div className="chat_people">
										<div className="chat_img">
											<img src={robotImage} alt="user" />
										</div>
										<div className="chat_ib">
											<h5>
												Robô <span className="chat_date">{msg.timestamp}</span>
											</h5>
											<p>{msg.text}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="mesgs">
						<div className="msg_history" ref={msgHistoryRef}>
							{/* Message History */}
							{messages.map((msg, index) => (
								<div
									className={msg.type === 'incoming' ? 'incoming_msg' : 'outgoing_msg'}
									key={index}
								>
									<div className={msg.type === 'incoming' ? 'incoming_msg_img' : 'sent_msg'}>
										<img src={robotImage} alt="user" />
									</div>
									<div className={msg.type === 'incoming' ? 'received_msg' : 'sent_msg'}>
										<div className={msg.type === 'incoming' ? 'received_withd_msg' : 'sent_msg'}>
											<p>{msg.text}</p>
											<span className="time_date">{msg.timestamp}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatComponent;