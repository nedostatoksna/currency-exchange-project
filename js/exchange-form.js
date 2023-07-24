// interactive form elements
const giveInput = document.querySelector(".give-input"),
      receiveInput = document.querySelector(".receive-input"),
      giveCurrency = document.querySelector(".give-currency-input"),
      receiveCurrency = document.querySelector(".receive-currency-input"),
      rateOutput = document.querySelector(".rate-output"),
      commissionOutput = document.querySelector(".commission-output"),
      inverseBtn = document.querySelectorAll(".inverse"),
      agreementCheckbox = document.querySelector(".input-agreement"),
	  exchangeBtn  = document.querySelector(".exchange"),
	  form = document.querySelector(".main-form"),
	  latestApplicationsBlock = document.querySelector(".latest-applications"),
	  sliderButtonsWrapper = document.querySelector(".slider-btns-wrapper"),
	  appArticlesWrapper = document.querySelector(".applications-cards-wrapper");

// mobile version slider elements
let sliderBtnGroup,
    applicationCardsGroup;

// api code
async function getDataCurrency() {
	// let url = 'https://v6.exchangerate-api.com/v6/6d90771bf7d7e8bd09657c9a/latest/USD';
	// let response = await fetch(url);
	// return await response.json() 
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
	}
};
// export default getDataCurrency;

// main Component
let state = {
    giveAmount: 0, 
    receiveAmount: 0, 
    giveCurrency: "USD", 
    receiveCurrency: "USD", 
	rates: {}, 
    checkbox: false,
    rate: { 
        giveName: "USD",
        koef: 1,
        receiveName: "USD"
    },
    commission: {
        commissionCount: 0,
        commissionName: "USD"
    },
};

// latest applications Component
let latestApplication = {
	dateString: "",
	giveAmount: 0,
	giveCurrency: "USD",
	receiveAmount: 0,
	receiveCurrency: "USD"
};

// init function
const init = async function() {
	const dataCurrency = await getDataCurrency();
	state.rates = dataCurrency.conversion_rates;

	if (!localStorage.getItem('latestApplications')) {
		localStorage.setItem("latestApplications", JSON.stringify([]));
	} else {
		let latestApplicationsFromStorage = JSON.parse(localStorage.getItem("latestApplications"));

		if (latestApplicationsFromStorage.length > 0) {
			latestApplicationsBlock.classList.remove("d-none");
			renderLatestApplications();
		} else {
			latestApplicationsBlock.classList.add("d-none");
		}
	}

	for (let key in state.rates) {
		let option = createEl("option", ["currency-option"], null);
		option.value = key;
		option.textContent = key;
		let optionClone = option.cloneNode(true);
		giveCurrency.append(option);
		receiveCurrency.append(optionClone);
	}

	giveCurrency.removeAttribute("disabled");
	receiveCurrency.removeAttribute("disabled");
	giveInput.removeAttribute("disabled");
};

init();

// calc functions
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

// render functions
const render = function() {
	rateOutput.innerHTML = `1 <span class="currency">${state.rate.giveName} </span>= ${state.rate.koef} <span class="currency">${state.rate.receiveName} </span> `;
	commissionOutput.innerHTML = `${state.commission.commissionCount} <span class="currency">${state.rate.receiveName} </span> `;
	receiveInput.value = state.receiveAmount;
	giveInput.value = state.giveAmount;
	giveCurrency.value = state.giveCurrency;
	receiveCurrency.value = state.receiveCurrency;
};

const renderLatestApplications = function() {
	removeAllChildren(appArticlesWrapper);
	removeAllChildren(sliderButtonsWrapper);

	let latestApplicationsFromStorage = JSON.parse(localStorage.getItem("latestApplications"));
	latestApplicationsBlock.classList.remove("d-none");

	for (let i = 0; i < latestApplicationsFromStorage.length; i++) {
		let appArticle = createEl("article", ["application-card"], null);
		if (i === 0) appArticle.classList.add("active-card");
		appArticle.dataset.id = `${i + 1}`;

		let appDate = createEl("h2", ["transaction-date"], latestApplicationsFromStorage[i].dateString);

		let appDivContent = createEl("div", ["application-card-content"], null);

		let appGiveDetailsDiv = createEl("div", ["transaction-details-wrapper"], null);

		let appGiveTransAmount = createEl("p", ["transaction-details", "give-transaction-details"], latestApplicationsFromStorage[i].giveAmount);

		let appGiveTransCurrency = createEl("span", ["transaction-currency", "give-card-curr"], latestApplicationsFromStorage[i].giveCurrency);

		let appIconWrapper = createEl("div", ["transaction-icon"], null);
	
		let appReceiveDetailsDiv = createEl("div", ["transaction-details-wrapper"], null);

		let appReceiveTransAmount = createEl("p", ["transaction-details", "receive-transaction-details"], latestApplicationsFromStorage[i].receiveAmount);

		let appReceiveTransCurrency = createEl("span", ["transaction-currency", "receive-card-curr"], latestApplicationsFromStorage[i].receiveCurrency);
	
		let sliderLabel = createEl("label", ["slide-label"], null);
		sliderLabel.setAttribute("for", `${i + 1}`);

		let sliderInput = createEl("input", ["slider-radio"], null);
		sliderInput.setAttribute("type", "radio");
		sliderInput.setAttribute("value", `slide${i + 1}`);
		sliderInput.setAttribute("name", "slide");
		sliderInput.setAttribute("id",  `${i + 1}`);
		if (i === 0) sliderInput.setAttribute("checked", "true");
		
		let sliderSpan = createEl("span", ["slide"], null);
		
		sliderLabel.appendChild(sliderInput);
		sliderLabel.appendChild(sliderSpan);
	
		appReceiveDetailsDiv.appendChild(appReceiveTransAmount);
		appReceiveDetailsDiv.appendChild(appReceiveTransCurrency);

		appGiveDetailsDiv.appendChild(appGiveTransAmount);
		appGiveDetailsDiv.appendChild(appGiveTransCurrency);

		appDivContent.appendChild(appGiveDetailsDiv);
		appDivContent.appendChild(appIconWrapper);
		appDivContent.appendChild(appReceiveDetailsDiv);

		appArticle.appendChild(appDate);
		appArticle.appendChild(appDivContent);

		appArticlesWrapper.appendChild(appArticle);
		sliderButtonsWrapper.appendChild(sliderLabel);
	}
	sliderBtnGroup = document.querySelectorAll(".slider-btns-wrapper"),
    applicationCardsGroup = document.querySelectorAll(".application-card");

	sliderBtnGroup.forEach(item => item.addEventListener("click", moveSlide));
};

// helpers
const removeAllChildren = function(block) {
	let existingElements = block.children;

	let items = Array.from(existingElements);
    items.forEach(item => block.removeChild(item));
};

const createEl = function(tagName, classNamesArr, textValue) {
	let element = document.createElement(tagName);
	element.textContent = textValue;

	for (let i = 0; i < classNamesArr.length; i++) {
		element.classList.add(classNamesArr[i]);
	}

	return element;
};

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

const prepDatesWithZeros = function(number) {
	let numbernumber;
	if (number < 10) {
		numbernumber =  String(`0${number}`);
	} else {
		numbernumber = number;
	}
	return numbernumber;
};

const writeToInput = function(input) {
	const value = input.value;
	let numbersValue = [];

	for (let i = 0; i < value.length; i++) {
	
	  if ((value[0] === ".") || (value[0] === "0")) {
		console.log("forbidden value");	
	  } else if (!isNaN(Number(value[i])) || value[i] === ".") {
		numbersValue.push(value[i]);

		if (value[i - 1] === "." && value[i] === ".") {
			numbersValue.pop(1);
		}
	  }
	};

	let newValue = "";
	for (let i = 0; i < numbersValue.length; i++) {
		if (numbersValue[i] !== ",") {
			newValue += numbersValue[i];
		}
	}
	input.value = newValue;
};

// reset State
const resetState = function() {
	agreementCheckbox.checked = false;
	exchangeBtn.disabled = true;
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

// unblock exchange button
const changeAgreement = function() {
	if (agreementCheckbox.checked === true) {
		exchangeBtn.disabled = false;
	} else if (agreementCheckbox.checked === false) {
		exchangeBtn.disabled = true;
	}
};

// event handlers
const inputGiveAmount = function(event) {
	writeToInput(event.target);
	state.giveAmount = event.target.value;

	calcCommission();
	calcReceive();
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
	if ((giveInput.value > 0)) {
		localStorage.setItem('state', JSON.stringify(state));
		let transactionDate = new Date();

		latestApplication.giveAmount = state.giveAmount;
		latestApplication.receiveAmount = state.receiveAmount;
		latestApplication.giveCurrency = state.giveCurrency;
		latestApplication.receiveCurrency = state.receiveCurrency;
		latestApplication.dateString = 	prepDate(transactionDate);
		let latestApplicationsFromStorage = JSON.parse(localStorage.getItem("latestApplications"));
		latestApplicationsFromStorage.unshift(latestApplication);

		if (latestApplicationsFromStorage.length > 4) {
			latestApplicationsFromStorage.splice(4, latestApplicationsFromStorage.length);
		}
		localStorage.setItem("latestApplications", JSON.stringify(latestApplicationsFromStorage));

		showModal(exchangeTextTop, exchangeTextBottom);
		renderLatestApplications();
		resetState();
		render();
	}
};

// event listeners
giveInput.addEventListener("input", inputGiveAmount);
giveCurrency.addEventListener("change", changeGiveCurrency);
receiveCurrency.addEventListener("change", changeReceiveCurrency);
form.addEventListener("submit", submitExchange);
agreementCheckbox.addEventListener("change", () => changeAgreement());




