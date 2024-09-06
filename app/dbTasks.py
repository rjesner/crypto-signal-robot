from app.BTCHistory import BTCHistory
from app.api.services.CryptoService import CryptoService
from app.dbSetup import SessionLocal
from datetime import datetime
from bs4 import BeautifulSoup
import requests


def setup_btc_history():
	session = SessionLocal()

	url = "https://coinmarketcap.com/currencies/bitcoin/"
	page = requests.get(url)
	soup = BeautifulSoup(page.content, "html.parser")
	if soup and soup.text.strip():
		btc_info_element = CryptoService.crypto_info_filter(soup)
		btc_price_element = btc_info_element.get("price")

		now = datetime.now()
		formatted_date = now.strftime("%Y-%m-%d")

		new_data = BTCHistory(
			btc_value=btc_price_element,
			btc_date=formatted_date
		)
		session.add(new_data)
		session.commit()
		session.close()

