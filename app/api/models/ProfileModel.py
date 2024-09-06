import re


class ProfileModel:
    def __init__(self, email: str, password: str, cpf: str, address: str, telephone: str):
        self.email = email
        self.password = password
        self.cpf = cpf
        self.address = address
        self.telephone = telephone

    @staticmethod
    def is_valid_email(email: str) -> bool:
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(email_regex, email) is not None

    @staticmethod
    def is_valid_password(password: str) -> bool:
        return len(password) >= 6

    @staticmethod
    def is_valid_cpf(cpf: str) -> bool:
        return True

    @staticmethod
    def is_valid_telephone(telephone: str) -> bool:
        return True

    def __repr__(self):
        return (f"ProfileModel(email={self.email!r}, password={'*' * len(self.password)}, "
                f"cpf={self.cpf!r}, address={self.address!r}, telephone={self.telephone!r})")
