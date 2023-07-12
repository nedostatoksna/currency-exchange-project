// интерактивные элементы формы
const giveInput = document.querySelector(".give-input"),
      receiveInput = document.querySelector(".receive-input"),
      giveCurrency = document.querySelector(".give-currency-input"),
      receiveCurrency = document.querySelector(".receive-currency-input"),
      rateOutput = document.querySelector(".rate-output"),
      commissionOutput = document.querySelector(".commission-output"),
      inverseBtn = document.querySelectorAll(".inverse"),
      agreementCheckbox = document.querySelector(".input-agreement-check"),
	  exchangeBtn  = document.querySelector(".exchange"),
	  form = document.querySelector(".main-form");

// код api
async function getDataCurrency() {
	// let url = 'https://v6.exchangerate-api.com/v6/6d90771bf7d7e8bd09657c9a/latest/USD';
	// let response = await fetch(url);
	// return await response.json() // читаем ответ в формате JSON
	return {
	 "result":"success",
	 "documentation":"https://www.exchangerate-api.com/docs",
	 "terms_of_use":"https://www.exchangerate-api.com/terms",
	 "time_last_update_unix":1653264001,
	 "time_last_update_utc":"Mon, 23 May 2022 00:00:01 +0000",
	 "time_next_update_unix":1653350401,
	 "time_next_update_utc":"Tue, 24 May 2022 00:00:01 +0000",
	 "base_code":"USD",
	 "conversion_rates":{
	  "USD":1,
	  "AED":3.6725,
	  "AFN":90.3330,
	  "ALL":114.3400,
	  "AMD":457.3893,
	  "ANG":1.7900,
	  "AOA":416.0034,
	  "ARS":118.3803,
	  "AUD":1.4156,
	  "AWG":1.7900,
	  "AZN":1.6996,
	  "BAM":1.8516,
	  "BBD":2.0000,
	  "BDT":86.4531,
	  "BGN":1.8516,
	  "BHD":0.3760,
	  "BIF":2023.7871,
	  "BMD":1.0000,
	  "BND":1.3788,
	  "BOB":6.8769,
	  "BRL":4.9109,
	  "BSD":1.0000,
	  "BTN":77.9908,
	  "BWP":12.2025,
	  "BYN":3.1381,
	  "BZD":2.0000,
	  "CAD":1.2814,
	  "CDF":1993.3441,
	  "CHF":0.9748,
	  "CLP":838.6265,
	  "CNY":6.7088,
	  "COP":4048.6401,
	  "CRC":671.6117,
	  "CUP":24.0000,
	  "CVE":104.3907,
	  "CZK":23.3333,
	  "DJF":177.7210,
	  "DKK":7.0629,
	  "DOP":55.2602,
	  "DZD":145.8808,
	  "EGP":18.2801,
	  "ERN":15.0000,
	  "ETB":51.7544,
	  "EUR":0.9468,
	  "FJD":2.1651,
	  "FKP":0.8014,
	  "FOK":7.0629,
	  "GBP":0.8014,
	  "GEL":2.9025,
	  "GGP":0.8014,
	  "GHS":7.9321,
	  "GIP":0.8014,
	  "GMD":53.9519,
	  "GNF":8826.5332,
	  "GTQ":7.6708,
	  "GYD":208.6848,
	  "HKD":7.8536,
	  "HNL":24.4879,
	  "HRK":7.1331,
	  "HTG":112.2287,
	  "HUF":362.8390,
	  "IDR":14574.3385,
	  "ILS":3.3744,
	  "IMP":0.8014,
	  "INR":77.8898,
	  "IQD":1456.0431,
	  "IRR":42050.5420,
	  "ISK":131.4361,
	  "JEP":0.8014,
	  "JMD":154.8155,
	  "JOD":0.7090,
	  "JPY":128.0929,
	  "KES":116.6156,
	  "KGS":82.3628,
	  "KHR":4048.8684,
	  "KID":1.4160,
	  "KMF":465.7584,
	  "KRW":1271.5803,
	  "KWD":0.2996,
	  "KYD":0.8333,
	  "KZT":426.5671,
	  "LAK":14669.7504,
	  "LBP":1507.5000,
	  "LKR":353.4155,
	  "LRD":153.2965,
	  "LSL":15.8384,
	  "LYD":4.8153,
	  "MAD":9.9007,
	  "MDL":19.0736,
	  "MGA":3997.2013,
	  "MKD":58.3439,
	  "MMK":1835.9669,
	  "MNT":3125.5429,
	  "MOP":8.0896,
	  "MRU":36.3531,
	  "MUR":42.3765,
	  "MVR":15.4120,
	  "MWK":818.7111,
	  "MXN":19.8696,
	  "MYR":4.3680,
	  "MZN":64.2618,
	  "NAD":15.8384,
	  "NGN":415.3307,
	  "NIO":35.8305,
	  "NOK":9.7488,
	  "NPR":124.7853,
	  "NZD":1.5608,
	  "OMR":0.3845,
	  "PAB":1.0000,
	  "PEN":3.7366,
	  "PGK":3.5237,
	  "PHP":52.1821,
	  "PKR":200.2248,
	  "PLN":4.3695,
	  "PYG":6896.2711,
	  "QAR":3.6400,
	  "RON":4.6698,
	  "RSD":111.1573,
	  "RUB":60.6947,
	  "RWF":1050.8521,
	  "SAR":3.7500,
	  "SBD":7.9469,
	  "SCR":13.3113,
	  "SDG":451.3498,
	  "SEK":9.9509,
	  "SGD":1.3788,
	  "SHP":0.8014,
	  "SLL":12904.2883,
	  "SOS":577.0485,
	  "SRD":20.9160,
	  "SSP":440.2604,
	  "STN":23.1948,
	  "SYP":2508.6940,
	  "SZL":15.8384,
	  "THB":34.5273,
	  "TJS":12.4892,
	  "TMT":3.4979,
	  "TND":2.9944,
	  "TOP":2.3154,
	  "TRY":15.9401,
	  "TTD":6.7844,
	  "TVD":1.4160,
	  "TWD":29.5760,
	  "TZS":2323.1783,
	  "UAH":29.5848,
	  "UGX":3649.7073,
	  "UYU":40.5753,
	  "UZS":11137.7736,
	  "VES":4.8743,
	  "VND":23169.6396,
	  "VUV":116.4800,
	  "WST":2.6609,
	  "XAF":621.0112,
	  "XCD":2.7000,
	  "XDR":0.7435,
	  "XOF":621.0112,
	  "XPF":112.9746,
	  "YER":250.4490,
	  "ZAR":15.8366,
	  "ZMW":17.0670,
	  "ZWL":242.0516
	 }
	} // читаем ответ в формате JSON
}
// export default getDataCurrency;
// основной компонент
let state = {
    giveAmount: 0, // пользователь хочет обменять
    receiveAmount: 0, // пользователь получит
    giveCurrency: "USD", // валюта пользователя
    receiveCurrency: "USD", // валюта на которую меняет
	rates: {}, // список курса валют 
    checkbox: false,
    rate: { // для отображения курса в блоке rate 
        giveName: "USD",
        koef: 1,
        receiveName: "USD"
    },
    commission: { // для отображения комиссии
        commissionCount: 0,
        commissionName: "USD"
    },
};

// компонент для latest applications
let latestApplication = {
	dateString: "",
	giveAmount: 0,
	giveCurrency: "USD",
	receiveAmount: 0,
	receiveCurrency: "USD"
};

// функция инициализации
const init = async function() {
	// 1 - получаем данные
	// для продакшена
	// const request = await getDataCurrency();
	// const dataCurrency = request.json();

	// для разработки
	const dataCurrency = await getDataCurrency();
	// 2 обрабатываем данные
	state.rates = dataCurrency.conversion_rates;
	// 3 шаг проверка localStorage
	if (!localStorage.getItem('latestApplications')) {
		localStorage.setItem("latestApplications", JSON.stringify([]));
	}
// 4 заполняем данными html
	for (let key in state.rates) {
		let option = document.createElement('option');
		option.classList.add("currency-option");
		option.value = key;
		option.textContent = key;
		let optionClone = option.cloneNode(true);
		giveCurrency.append(option);
		receiveCurrency.append(optionClone);
	}
	renderLatestApplications();
	// 5 разблокируем интерфейс
	giveCurrency.removeAttribute("disabled");
	receiveCurrency.removeAttribute("disabled");
	giveInput.removeAttribute("disabled");
};

init();

// функция для разблокировки exchange button
const checkForExchange = function() {
	if ((agreementCheckbox.getAttribute('checked') === "true")  && (giveInput.value > 0)) {
		exchangeBtn.removeAttribute("disabled");
	} else {
		exchangeBtn.setAttribute("disabled", true);
	}
};

const calcCommission = function() {
	const koef = state.rate.koef;
	const giveAmount = state.giveAmount;
	const percent = (giveAmount * koef) / 100;
	state.commission.commissionCount = percent;
};
const calcKoef = function() {
	const giveCurrency = state.giveCurrency;
	const receiveCurrency = state.receiveCurrency;
	const giveCurrencyAmount = state.rates[giveCurrency];
	const receiveCurrencyAmount = state.rates[receiveCurrency];
	const koef = receiveCurrencyAmount / giveCurrencyAmount;
	state.rate.koef = koef;
};

const calcReceive = function() {
	state.receiveAmount = state.giveAmount * state.rate.koef - state.commission.commissionCount;
};

// функция рендер
const render = function() {
	// render rate
	rateOutput.innerHTML = `1 <span class="currency">${state.rate.giveName} </span>= ${state.rate.koef} <span class="currency">${state.rate.receiveName} </span> `;
	// commission render
	commissionOutput.innerHTML = `${state.commission.commissionCount} <span class="currency">${state.rate.giveName} </span> `;
	// recieve render
	receiveInput.value = state.receiveAmount;
	giveInput.value = state.giveAmount;
	giveCurrency.value = state.giveCurrency;
	receiveCurrency.value = state.receiveCurrency;
};

const renderLatestApplications = function() {
	let latestApplicationsFromStorage = JSON.parse(localStorage.getItem("latestApplications"));

	for (let i = 0; i < latestApplicationsFromStorage.length; i++) {
		const applicationArticles = document.querySelectorAll(".application-card");

		for (let j = 0; j < applicationArticles.length; j++) {
			
			if (j === i) {
				let dateCard = applicationArticles[j].querySelector("h2");
				dateCard.textContent = latestApplicationsFromStorage[i].dateString;

				let giveAmountCard = applicationArticles[j].querySelector(".give-transaction-details");
				giveAmountCard.textContent = latestApplicationsFromStorage[i].giveAmount;

				let giveAmountCurrency = applicationArticles[j].querySelector(".give-card-curr");
				giveAmountCurrency.textContent = latestApplicationsFromStorage[i].giveCurrency;

				let receiveAmountCurrency = applicationArticles[j].querySelector(".receive-card-curr");
				receiveAmountCurrency.textContent = latestApplicationsFromStorage[i].receiveCurrency;

				let receiveAmountCard = applicationArticles[j].querySelector(".receive-transaction-details");
				receiveAmountCard.textContent = latestApplicationsFromStorage[i].receiveAmount;
			}
		}
	}
};

//  обработчики событий
const inputGiveAmount = function(event) {
	// обновляет give в state
	state.giveAmount = event.target.value;
	// пересчитывает receive , commission и обновляет их в state
	calcCommission();
	calcReceive();
	// рендер
	render();
};

const changeGiveCurrency = function(event) {
	 state.giveCurrency = event.target.value;
	 state.rate.giveName = event.target.value;
	 state.commission.commissionName = event.target.value;

	 calcKoef();
	 calcCommission();
	 calcReceive();
	 render();
};

const changeReceiveCurrency = function(event) {
	state.receiveCurrency = event.target.value;
	state.rate.receiveName = event.target.value;

	calcKoef();
	calcCommission();
	calcReceive();
	render();
};

const submitExchange = function(event) {
	event.preventDefault();
	if ((agreementCheckbox.getAttribute('checked') === "true")  && (giveInput.value > 0)) {
		console.log("форма отправлена");
		localStorage.setItem('state', JSON.stringify(state));
		let transactionDate = new Date();

		latestApplication.giveAmount = state.giveAmount;
		latestApplication.receiveAmount = state.receiveAmount;
		latestApplication.giveCurrency = state.giveCurrency;
		latestApplication.receiveCurrency = state.receiveCurrency;
		latestApplication.dateString = 	prepDate(transactionDate);
		let latestApplicationsFromStorage = JSON.parse(localStorage.getItem("latestApplications"));
		latestApplicationsFromStorage.unshift(latestApplication);
		localStorage.setItem("latestApplications", JSON.stringify(latestApplicationsFromStorage));
		showModal(exchangeTextTop, exchangeTextBottom);
		renderLatestApplications();
		resetState();
		render();
	}
};
// reset State
const resetState = function() {
	state.giveAmount = 0; 
	state.receiveAmount = 0;
	state.giveCurrency = "USD";
	state.receiveCurrency = "USD";
	state.checkbox = false;
	state.rate.giveName = "USD";
	state.rate.koef = 1;
	state.rate.receiveName = "USD";
	state.commission.commissionCount = 0;
	state.commission.commissionName = "USD";
};
// подготовка даты
const prepDate = function(transactionDate) {
	let day = transactionDate.getDate(),
		dayday = prepDatesWithZeros(day);

	let month = transactionDate.getMonth() + 1,
		monthmonth = prepDatesWithZeros(month);

	let year = transactionDate.getFullYear();

	let hours = transactionDate.getHours(),
		hourshours = prepDatesWithZeros(hours);

	let minutes = transactionDate.getMinutes(),
		minutesminutes = prepDatesWithZeros(minutes);

	let transactionTimeString = String(`${dayday}.${monthmonth}.${year}, ${hourshours}:${minutesminutes}`);
	return transactionTimeString;
};

// добавление нулей к датам
const prepDatesWithZeros = function(number) {
	let numbernumber;
	if (number < 10) {
		numbernumber =  String(`0${number}`);
	} else {
		numbernumber = number;
	}
	return numbernumber;
};

const changeAgreement = function(event) {
	if (agreementCheckbox.getAttribute("checked") === null || agreementCheckbox.getAttribute("checked") === "false") {
		agreementCheckbox.setAttribute("checked", true);
		state.checkbox = true;
	} else if (agreementCheckbox.getAttribute("checked") === "true") {
		// agreementCheckbox.setAttribute("checked", "false");
		agreementCheckbox.setAttribute("checked", "false");
		state.checkbox = false;
	}
	checkForExchange();
};
// const inverse = function() {}

// прослушки
giveInput.addEventListener("input", inputGiveAmount);
giveCurrency.addEventListener("change", changeGiveCurrency);
receiveCurrency.addEventListener("change", changeReceiveCurrency);
form.addEventListener("submit", submitExchange);
agreementCheckbox.addEventListener("change", changeAgreement);
// inverseBtn.addEventListener("click", inverse);

