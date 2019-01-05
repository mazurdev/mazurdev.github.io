const cryptoAPI = new CryptoAPI();
const ui = new UI();

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const currencySelect = document.getElementById('currency').value;
	const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

	// Validate
	if (currencySelect === '' || cryptoCurrencySelect === '') {
		// display an error
		ui.printMessage('Fill in all the fields, please', 'deep-grey darken-4 card-panel');
	} else {
		// Query the rest api
		cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
			.then(data => {
				ui.displayResult(data.result[0], currencySelect);
			})
	}
})