from decimal import Decimal, InvalidOperation


class CryptoService:
	@staticmethod
	def crypto_info_filter(soup):
		market_cap_element = soup.find('dd', {'class': 'sc-65e7f566-0 dzgtSD base-text'})
		price_element = soup.find('span', {'class': 'sc-65e7f566-0 clvjgF base-text'})
		market_cap = CryptoService.extract_market_cap(market_cap_element.get_text()) if market_cap_element else None
		price = price_element.get_text() if price_element else None
		return {'market_cap': market_cap, 'price': price}

	@staticmethod
	def extract_market_cap(input_data):
		dollar_index = input_data.find('$')

		if dollar_index != -1:
			return input_data[dollar_index:]
		return ""

	@staticmethod
	def parse_currency(currency_str):
		# Remove currency symbol and commas
		clean_str = currency_str.replace('$', '').replace(',', '')
		try:
			# Convert the cleaned string to Decimal
			return Decimal(clean_str)
		except InvalidOperation:
			raise ValueError(f"Formato de valor inválido: {currency_str}")
