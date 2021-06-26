document.querySelector(".switch").addEventListener("change", () => {
	let records = document.querySelectorAll(".price");
	let exchangePrice = {
		19.99: 199.99,
		24.99: 249.99,
		39.99: 399.99,
		399.99: 39.99,
		249.99: 24.99,
		199.99: 19.99,
	};
	records.forEach((elem) => {
		elem.innerHTML = exchangePrice[elem.innerHTML];
	});
});
