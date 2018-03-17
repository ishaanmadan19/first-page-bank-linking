function validateBankRegistrationFields() {
	//initializes variables
	x = document.getElementById("user-id").value;
	y = document.getElementById("user-password").value;
	placeholderX = document.getElementById("user-id").placeholder;
	placeholderY = document.getElementById("user-password").placeholder;
	// Checks to see if userId and Password Fields are not empty
	if (((placeholderX == "User ID") || (placeholderX == "Please enter your ID")) && (x=="")) {
		document.getElementById("user-id").placeholder = "Please enter your ID";
		if ((placeholderY == "Password") || (placeholderY == "Please enter your password")){
		document.getElementById("user-password").placeholder = "Please enter your password";
		}
	}
	else if (((placeholderY == "Password") || (placeholderY == "Please enter your password")) && (y=="")){
		document.getElementById("user-password").placeholder = "Please enter your password";
		if ((placeholderX == "User ID") || (placeholderX == "Please enter your ID")) {
		document.getElementById("user-id").placeholder = "Please enter your ID";
		}
	}
	else {
		window.location.href='reg3_link_finance.html';
	}

}

function validateTransactionFilterFields() {
	placeholder = document.getElementById("field_to_replace").placeholder;

	if (placeholder == "Select a category" || placeholder == "Please select a category") {
		document.getElementById("field_to_replace").placeholder = "Please select a category"
	} else if (placeholder == "Groceries") {
		window.location.href='USBankFilteredBy.html';
	}
}

function validateLogIn() {
	//initializes variables
	x = document.getElementById("user-id").value;
	y = document.getElementById("user-password").value;
	placeholderX = document.getElementById("user-id").placeholder;
	placeholderY = document.getElementById("user-password").placeholder;
	// Checks to see if userId and Password Fields are not empty
	if (((placeholderX == "User ID") || (placeholderX == "Please enter your ID")) && (x=="")) {
		document.getElementById("user-id").placeholder = "Please enter your ID";
		if ((placeholderY == "Password") || (placeholderY == "Please enter your password")){
		document.getElementById("user-password").placeholder = "Please enter your password";
		}
	}
	else if (((placeholderY == "Password") || (placeholderY == "Please enter your password")) && (y=="")){
		document.getElementById("user-password").placeholder = "Please enter your password";
		if ((placeholderX == "User ID") || (placeholderX == "Please enter your ID")) {
		document.getElementById("user-id").placeholder = "Please enter your ID";
		}
	}
	else {
		window.location.href='bankAccountsPage.html';
	}

}
