function validateFields() {
	//initializes variables
  //Getting user typed values for each of the input fields
	name = document.getElementById("name").value;
	user_email = document.getElementById("emailAddress").value;
  phone = document.getElementById("phone_number").value;
  username = document.getElementById("username").value;
  //Getting placeholder for each field, to check if empty
	placeholder_name = document.getElementById("name").placeholder;
	placeholder_email = document.getElementById("emailAddress").placeholder;
  placeholder_phone = document.getElementById("phone_number").placeholder;
  placeholder_username = document.getElementById("username").placeholder;

  // Checks to see if fields are not empty
	if (((placeholder_name == "Name") || (placeholder_name == "Please enter your name")) && (name=="")) {
		document.getElementById("name").placeholder = "Please enter your name";
	}
  else if (!user_email.includes("@")){
    document.getElementById("emailAddress").placeholder = "Please enter a valid email address";
  }
  else if (!phone.isNumber()){
    document.getElementById("phone_number").placeholder = "Please enter a valid number";
  }
  else if (((placeholder_username == "Username") || (placeholder_username == "Please enter a username")) && (username=="")) {
    document.getElementById("username").placeholder = "Please enter a username";
  }
	else {
		window.location.href='reg2_set_pass.html';
	}

}

String.prototype.isNumber = function(){return /^\d+$/.test(this);}


function validateCardsInfo() {
	//initializes variables
  //Getting user typed values for each of the input fields
	card_number = document.getElementById("card_number").value;
	expiration = document.getElementById("expiration").value;
  code = document.getElementById("code").value;
  //Getting placeholder for each field, to check if empty
	placeholder_number = document.getElementById("card_number").placeholder;
	placeholder_expiration = document.getElementById("expiration").placeholder;
  placeholder_code = document.getElementById("code").placeholder;

  // Checks to see if fields are not empty
	if (!card_number.isNumber()) {
		document.getElementById("card_number").value = "Please enter a valid card number";
	}
  else if (!isDate(expiration)){
    document.getElementById("expiration").value = "Please enter a valid expiration date";
  }
  else if (!code.isNumber()){
    document.getElementById("code").value = "Please enter the security code";
  }
	else {
		window.location.href='reg3_link_finance.html';
	}

}

var isDate = function(date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

function zeroWindow() {
  window.name = 0;
}
