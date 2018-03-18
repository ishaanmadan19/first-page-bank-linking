//Global variables
var fullList;
var isFilled = false;
var selectedCategory = "";


function filter() {
	var minAmount = 0.0;
	var maxAmount = 100000.0;		//TODO now assuming max transaction will not exceed 100'000 USD;
	var amountStr;
	var trAmount;
	var newList;
	let filteredDiv = "<div class=\"recent-transactions-title\">Filtered Transactions</div>";
	let notFoundDiv = "<div class=\"transactions-filter-notfound\">No transactions matching filter requirements found.<br>Please try again.</div>";
	var filteredList = filteredDiv;

	var minAmountStr = document.getElementById("min-amount").value;
	var maxAmountStr = document.getElementById("max-amount").value;
	var filterCategory = selectedCategory;

	console.log("selected:" + filterCategory);

	if (minAmountStr == "" && maxAmountStr == "" && filterCategory == "") {
		console.log("I got in");
		document.getElementById("filtered-contents").innerHTML = notFoundDiv;
		return
	}

	console.log("I'm here 1");

	if (!isFilled){
		fullList = document.querySelectorAll(".account-transaction-category");
		isFilled = true;
	}

	if (minAmountStr != "") {
		minAmount = parseFloat(minAmountStr);
	}

	if (maxAmountStr != "") {
		maxAmount = parseFloat(maxAmountStr);
	}

	if (filterCategory == "Groceries") {
		console.log("filter cat changing");
		filterCategory = "tc-groceries";
	} else if (filterCategory == "Fast Food") {
		filterCategory = "tc-fastfood";
	} else if (filterCategory == "Entertainment") {
		filterCategory = "tc-enter";
	} else if (filterCategory == "Education") {
		filterCategory = "tc-edu";
	} else if (filterCategory == "Deposit") {
		filterCategory = "tc-deposit";
	} else if (filterCategory == "Other") {
		filterCategory = "tc-other";
	}

	console.log("I'm here 2");

	// Iterate each div in the full list of recent transactions
	for (i=0; i<fullList.length; i++) {

		amountStr = fullList[i].getElementsByClassName("account-transaction-amount").item(0).innerHTML;

		if (amountStr.charAt(0) == "-") {
			amountStr = amountStr.substring(2, amountStr.length);
		} else {
			amountStr = amountStr.substring(1, amountStr.length);
		}

		trAmount = parseFloat(amountStr);

		console.log("I'm here 3");

		// ONLY WHEN CATEGORY IS SELECTED
		if (filterCategory == ""	||	fullList[i].className.split("  ")[1] == filterCategory) {
			console.log("Outer if");
			if (trAmount >= minAmount && trAmount <= maxAmount) {
				console.log("Inner if");
				filteredList += fullList[i].outerHTML;
			}
		}
	}

	if (filteredList == filteredDiv) {
		filteredList = notFoundDiv;
	}

	document.getElementById("filtered-contents").innerHTML = filteredList;

}

function selectItem(clickedElement) {
  selectedCategory = document.getElementById(clickedElement.id).text;
  document.getElementById("field_to_replace").placeholder = selectedCategory;
}
