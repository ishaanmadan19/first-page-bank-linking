//Global variables
var fullList;
var isFilled = false;



function filter() {

	var minAmount = 0.0;
	var maxAmount = 100000.0;		//TODO now assuming max transaction will not exceed 100'000 USD;
	var amountStr;
	var trAmount;
	var newList;

	if (!isFilled){
		fullList = document.getElementsByClassName("account-transaction-category");
		isFilled = true;
	}

	var minAmountStr = document.getElementById("filter-form-min").value;
	var maxAmountStr = document.getElementById("filter-form-max").value;
	var category = document.getElementById("myDropdown").value;

	if (minAmountStr != "") {
		minAmount = parseFloat(minAmountStr);
	}

	if (maxAmountStr != "") {
		maxAmount = parseFloat(maxAmountStr);
	}

	// var testlist = fullList.getElementsByClassName("tc-edu");
	// console.log(testlist)

	var testVar;


	// Iterate each div in the full list of recent transactions
	for (i=0; i<fullList.length; i++) {
		amountStr = fullList[i].getElementsByClassName("account-transaction-amount").item(0).innerHTML;

		if (amountStr.charAt(0) == "-") {
			amountStr = amountStr.substring(2, amountStr.length);
		} else {
			amountStr = amountStr.substring(1, amountStr.length);
		}

		//AmountStr now holds str with number only (two decimal points)

		trAmount = parseFloat(amountStr);



		console.log(trAmount);
	}



}
