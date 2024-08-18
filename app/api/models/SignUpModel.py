import re


class SignUpModel:
	def __init__(self, first_name: str, last_name: str, email: str, password: str):
		self.first_name = first_name
		self.last_name = last_name
		self.email = email
		self.password = password

	@staticmethod
	def is_valid_email(email: str) -> bool:
		email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
		return re.match(email_regex, email) is not None

	@staticmethod
	def is_valid_password(password: str) -> bool:
		return len(password) >= 6

	@staticmethod
	def is_valid_name(name: str) -> bool:
		return bool(name) and all(c.isalpha() or c.isspace() for c in name)

	def __repr__(self):
		return (
			f"SignUpModel(first_name={self.first_name!r}, "
			f"last_name={self.last_name!r}, "
			f"email={self.email!r}, "
			f"password={'*' * len(self.password)})"
		)
