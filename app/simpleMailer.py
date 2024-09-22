from flask_mail import Mail, Message


class simpleMailer:
	__mailer = None
	__app = None

	@classmethod
	def initMailer(cls, app):
		if not cls.__app and not cls.__mailer:
			cls.__app = app
			
			cls.__app.config['MAIL_SERVER'] = 'smtp.gmail.com'
			cls.__app.config['MAIL_PORT'] = 465
			cls.__app.config['MAIL_USE_SSL'] = True
			cls.__app.config['MAIL_USERNAME'] = 'rjesner.eng@gmail.com'
			cls.__app.config['MAIL_PASSWORD'] = 'placeholder_password'
			cls.__mailer = Mail(cls.__app)
		return cls.__mailer

	@classmethod
	def sendMail(cls, receiver, subject, message):
		with cls.__app.app_context():
			msg = Message(
				subject,
				sender='rjesner.eng@gmail.com',
				recipients=[receiver],
				body=message
			)
			cls.__mailer.send(msg)
