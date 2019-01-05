class CryptoAPI {
	// Запросить остальные api с валютой и криптовалютой

	async queryAPI(currency, cryptocurrency) {
		// Запросить URL-адрес
		const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);
		const result = await url.json();
		return {
			result
		}

	}

	// Получите все криптовыделения
	async getCryptoCurrenciesList() {
		const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');
		const cryptoCurrencies = await url.json();
		return {
			cryptoCurrencies
		}
	}
}