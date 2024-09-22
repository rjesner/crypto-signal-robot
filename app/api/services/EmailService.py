from app.simpleMailer import simpleMailer


class EmailService:
	@staticmethod
	def send_email(dest_email: str, title: str, body: str):
		simpleMailer.sendMail(dest_email, title, body)
