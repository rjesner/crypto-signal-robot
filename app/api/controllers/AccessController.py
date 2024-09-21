from bs4 import BeautifulSoup
import requests

from app.api.services.CryptoService import CryptoService


class AccessController:
    @staticmethod
    def access():
        url = "https://coinmarketcap.com/currencies/bitcoin/"
        page = requests.get(url)
        soup = BeautifulSoup(page.content, "html.parser")
        if soup and soup.text.strip():
            btc_info_element = CryptoService.crypto_info_filter(soup)
            btc_market_cap_element = btc_info_element.get("market_cap")
            btc_price_element = btc_info_element.get("price")
            if not btc_market_cap_element or not btc_price_element:
                return {'message': 'Informação não encontrada'}, 400
        else:
            return {'message': 'A página está vazia ou não pode ser obtida'}, 400

        url = "https://coinmarketcap.com/currencies/ethereum/"
        page = requests.get(url)
        soup = BeautifulSoup(page.content, "html.parser")

        if soup and soup.text.strip():
            eth_info_element = CryptoService.crypto_info_filter(soup)
            eth_market_cap_element = eth_info_element.get("market_cap")
            eth_price_element = eth_info_element.get("price")
            if not eth_market_cap_element or not eth_price_element:
                return {'message': 'Informação não encontrada'}, 400
        else:
            return {'message': 'A página está vazia ou não pode ser obtida'}, 400

        url = "https://coinmarketcap.com/currencies/solana/"
        page = requests.get(url)
        soup = BeautifulSoup(page.content, "html.parser")

        if soup and soup.text.strip():
            sol_info_element = CryptoService.crypto_info_filter(soup)
            sol_market_cap_element = sol_info_element.get("market_cap")
            sol_price_element = sol_info_element.get("price")
            if not sol_market_cap_element or not sol_price_element:
                return {'message': 'Informação não encontrada'}, 400
        else:
            return {'message': 'A página está vazia ou não pode ser obtida'}, 400

        response_string = btc_market_cap_element + "|" + btc_price_element + "|"
        response_string += eth_market_cap_element + "|" + eth_price_element + "|"
        response_string += sol_market_cap_element + "|" + sol_price_element

        return {'message': response_string}, 200

