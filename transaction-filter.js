//Global variables
var fullList;
var isFilled = false;



function filter() {

	if (!isFilled){
		fullList = document.getElementByClassName("account-transaction-category");
		isFilled = true;
	}

	var minAmountStr = document.getElementById("filter-form-min").value
	var maxAmountStr = document.getElementById("filter-form-max").value
	var category = document.getElementById("myDropdown").value



}
