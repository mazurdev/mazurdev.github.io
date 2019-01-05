class UI {
	constructor() {
		this.init();
	}
	init() {
		this.printCryptoCurrencies();
	}

	// Распечатывает <option> для формы
	printCryptoCurrencies() {
		cryptoAPI.getCryptoCurrenciesList()
			.then(data => {
				const cryptoCurrencies = data.cryptoCurrencies;

				// Создаём <select> из REST API
				const select = document.getElementById('cryptocurrency');

				cryptoCurrencies.forEach(currency => {
					// добавляем <option>
					const option = document.createElement('option');
					option.value = currency.id;
					option.appendChild(document.createTextNode(currency.name));
					select.appendChild(option);
				})
			})
	}

	// Распечатываем сообщение 2 параметра, сообщения и классы

	printMessage(message, className) {
		const div = document.createElement('div');

		// добавляем класс
		div.className = className;
		// добавляем сообщение
		div.appendChild(document.createTextNode(message));

		const messagesDiv = document.querySelector('.messages');

		messagesDiv.appendChild(div);

		// Удаляем сообщение
		setTimeout(() => {
			document.querySelector('.messages div').remove();
		}, 3000);
	}

	// Распечатать результат оценки / курса
	displayResult(result, currency) {

		console.log(result);

		let currencyName;
		currencyName = 'price_' + currency.toLowerCase();

		const value = result[currencyName];

		const prevResult = document.querySelector('#result > div');
		if (prevResult) {
			prevResult.remove();
		}

		let HTMLTemplate = '';
		HTMLTemplate += `
               <div class="card cyan darken-3">
                    <div class="card-content white-text">
                         <span class="card-title">Результат</span>
                         <p>Price ${result.name} in ${currency} is - $ ${value}</p>
                         <hr>
                         <p>Last hour: ${result.percent_change_1h} %</p>
                         <hr>
                         <p>Last day: ${result.percent_change_24h} %</p>
                         <hr>
                         <p>Last 7 days: ${result.percent_change_7d} %</p>
                    </div>
               </div>
          `;

		// loader
		this.showSpinner();
		setTimeout(() => {

			const divResult = document.querySelector('#result');
			divResult.innerHTML = HTMLTemplate;

			document.querySelector('.spinner img').remove();
		}, 3000);
	}

	showSpinner() {
		const spinnerGIF = document.createElement('img');
		spinnerGIF.src = 'img/spinner.gif';
		document.querySelector('.spinner').appendChild(spinnerGIF);
	}
}