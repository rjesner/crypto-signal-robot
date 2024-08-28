from bs4 import BeautifulSoup
import requests


class AccessController:
    @staticmethod
    def access():
        url = "https://coinmarketcap.com/currencies/bitcoin/"
        page = requests.get(url)
        soup = BeautifulSoup(page.content, "html.parser")

        if soup and soup.text.strip():
            market_cap_element = soup.find('dd', {'class': 'sc-65e7f566-0 dzgtSD base-text'})
            if market_cap_element:
                market_cap = market_cap_element.get_text()
            else:
                return {'message': 'Market cap information not found'}, 400
        else:
            return {'message': 'The page is empty or could not be retrieved'}, 400

        return {'message': market_cap}, 200
