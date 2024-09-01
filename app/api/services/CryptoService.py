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
