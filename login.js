
function login() {
	//initializes variables
	username = document.getElementById("user-id").value;
	pass = document.getElementById("user-password").value;
	placeholder_username = document.getElementById("user-id").placeholder;
	placeholder_pass = document.getElementById("user-password").placeholder;


	// Checking input format

	if (((placeholder_username == "Username") || (placeholder_username == "Please enter your username")) && (username=="")) {
		document.getElementById("user-id").placeholder = "Please enter your username";
		if ((placeholder_pass == "Password") || (placeholder_pass == "Please enter your password")){
			document.getElementById("user-password").placeholder = "Please enter your password";

		}
	}
	else if (((placeholder_pass == "Password") || (placeholder_pass == "Please enter your password")) && (pass=="")){
		document.getElementById("user-password").placeholder = "Please enter your password";
		if ((placeholder_username == "Username") || (placeholder_username == "Please enter your username")) {
		document.getElementById("user-id").placeholder = "Please enter your username";
		}
	}


	// Checking user match

	else {

		if (username == "tristan" && pass=="eecs330"){
			window.location.href='UserA/homeScreen.html';
		}
		else if (username == "nell" && pass=="loveHCI"){
			window.location.href='UserB/homeScreen.html';
		}
		else {

			if (username != "tristan" && username != "nell") {
				document.getElementById("user-id").placeholder = "This username does not exist";
				document.getElementById("user-id").value = "";
			}
			else {
				document.getElementById("user-password").placeholder = "Password mismatch";
				document.getElementById("user-password").value = "";


			}

		}


	}

}
