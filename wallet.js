
function validateFields() {
	//initializes variables
	x = document.getElementById("user-id").value;
	y = document.getElementById("user-password").value;
	placeholderX = document.getElementById("user-id").placeholder;
	placeholderY = document.getElementById("user-password").placeholder;
	// Checks to see if userId and Password Fields are not empty
	if (((placeholderX == "User ID") || (placeholderX == "Please insert your ID")) && (x=="")) {
		document.getElementById("user-id").placeholder = "Please insert your ID";
		if ((placeholderY == "Password") || (placeholderY == "Please insert your password")){
		document.getElementById("user-password").placeholder = "Please insert your password";
		}
	}
	else if (((placeholderY == "Password") || (placeholderY == "Please insert your password")) && (y=="")){
		document.getElementById("user-password").placeholder = "Please insert your password";
		if ((placeholderX == "User ID") || (placeholderX == "Please insert your ID")) {
		document.getElementById("user-id").placeholder = "Please insert your ID";
		}
	}
	else {
		window.location.href='p1_2_linking_banks_cards.html';
	}
	
}