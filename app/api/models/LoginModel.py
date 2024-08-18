import re


class LoginModel:
    def __init__(self, email: str, password: str):
        self.email = email
        self.password = password

    @staticmethod
    def is_valid_email(email: str) -> bool:
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(email_regex, email) is not None

    @staticmethod
    def is_valid_password(password: str) -> bool:
        return len(password) >= 6

    def __repr__(self):
        return f"LoginModel(email={self.email!r}, password={'*' * len(self.password)})"
