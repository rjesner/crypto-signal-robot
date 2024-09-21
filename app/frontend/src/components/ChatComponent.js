import React, { useState, useEffect, useRef } from 'react';
import './template/ChatComponent.css';
import robotImage from '../assets/images/robot.png';
import { getAPI } from "./helper/GetAPI";
import { useAuth } from '../AuthContext';

const ChatComponent = () => {
	const { email } = useAuth();
	const [messages, setMessages] = useState([]);
	const msgHistoryRef = useRef(null);
	const [intervalId, setIntervalId] = useState(null);

	const sendMessage = (message, timestamp) => {
		setMessages((prevMessages) => [
			...prevMessages,
			{ text: message, type: 'outgoing', timestamp }
		]);
	};

	const fetchChatHistory = () => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', getAPI() + '/api/chat', false);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader('Authorization', `${email}`);

		try {
			xhr.send();

			if (xhr.status >= 200 && xhr.status < 300) {
				const data = JSON.parse(xhr.responseText);
				console.log('Histórico de sugestões recebido');
				console.log(data.message);
				const messagesArray = data.message.split('|');
				for (let i = 0; i < messagesArray.length; i += 2) {
					const message = messagesArray[i];
					const timestamp = messagesArray[i + 1];
					sendMessage(message, timestamp);
				}
			} else {
				console.log(`Server error: ${xhr.statusText}`);
			}
		} catch (error) {
			console.log(`Network error: ${error.message}`);
		}
	};

	useEffect(() => {
		fetchChatHistory();

		const initialMessage = 'Sou o robô de sinais. Informarei por este canal dicas de compra de criptomoedas.';
		const currentDate = new Date().toLocaleDateString();
		sendMessage(initialMessage, currentDate);

		const id = setInterval(async () => {
			try {
				const response = await fetch(getAPI() + '/api/robot', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${email}`,
                    },
                });

				const data = await response.json();

				if (response.ok) {
					console.log('Sugestão de compra recebida');
					sendMessage(data.message, currentDate);
				} else {
					console.log(`Server error: ${data.message || response.statusText}`);
				}
			} catch (error) {
				console.log(`Network error: ${error.message}`);
			}
		}, 10000);

		setIntervalId(id);

		return () => clearInterval(id);
	}, [email]);

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