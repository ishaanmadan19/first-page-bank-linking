var budget=160;//global variable for variable, so when it is editted it is editted everywhere.

function progress()
{
	document.getElementById("progress-tomake").style.backgroundColor="#00E065";
	document.getElementById("cancel-button").value="back";
	var amountSpent=document.getElementById("amount-spent").innerHTML;
	var amSp=parseInt(amountSpent);
	var remaining=document.getElementById("remaining").innerHTML;
	var rem=parseFloat(remaining);
	remaining-=amountSpent;
	var amountSpent2=document.getElementById("amount-spent").innerHTML;
	var firstRem=document.getElementById("remaining").innerHTML;
	firstRem-=amountSpent2;
	document.getElementById('remaining').innerHTML=firstRem;
	document.getElementById('done-button').style.visibility="hidden";
	document.getElementById('cancel-button').style.width=200;

	document.getElementById('cancel-button').style.marginLeft=85;
	document.getElementById('cancel-button').innerHTML="Done";
};
function progress2()
{
	document.getElementById("progress-tomake2").style.backgroundColor="#00E065";
	document.getElementById("cancel-button").value="back";
	var amountSpent=document.getElementById("amount-spent").innerHTML;
	var amSp=parseInt(amountSpent);
	var remaining=document.getElementById("remaining").innerHTML;
	var rem=parseFloat(remaining);
	remaining-=amountSpent;
	var amountSpent2=document.getElementById("amount-spent").innerHTML;
	var firstRem=document.getElementById("remaining").innerHTML;
	firstRem-=amountSpent2;
	document.getElementById('remaining').innerHTML=firstRem;
	document.getElementById('done-button').style.visibility="hidden";
	document.getElementById('cancel-button').style.width=200;

	document.getElementById('cancel-button').style.marginLeft=85;
	document.getElementById('cancel-button').innerHTML="Done";
};
function validateBankRegistrationFields() {
	//initializes variables
	x = document.getElementById("old-password").value;
	y = document.getElementById("new-password").value;
	z = document.getElementById("repeat-password").value;
	placeholderX = document.getElementById("old-password").placeholder;
	placeholderY = document.getElementById("new-password").placeholder;
	placeholderZ = document.getElementById("repeat-password").placeholder;

	if (((placeholderX == "Old Password") || (placeholderX == "Please insert your old password.")) && (x=="")) {
		document.getElementById("old-password").placeholder = "Please insert your old password.";
		if ((placeholderY == "New Password") || (placeholderY == "Please insert your new password.")){
			document.getElementById("new-password").placeholder = "Please repeat your new password.";
			if ((placeholderZ == "Repeat New Password") || (placeholderZ == "Please insert your pass."))
			{
				document.getElementById("repeat-password").placeholder = "Please insert your pass.";
			}
		}
	}
	else if (((placeholderY == "New Password") || (placeholderY == "Please insert your new password.")) && (y=="")){
		document.getElementById("new-password").placeholder = "Please insert your new password.";
		if ((placeholderX == "Old Password") || (placeholderX == "Please insert your old password.")) {
			document.getElementById("old-password").placeholder = "Please insert your old password";
			if ((placeholderZ == "Repeat New Password") || (placeholderZ == "Please insert your pass."))
			{
				document.getElementById("repeat-password").placeholder = "Please insert your pass.";
			}
		}
	}
	else {
		window.location.href='accountPage.html';
	}

};
function validateFields() {
	//initializes variables
	x = document.getElementById("user-id").value;
	y = document.getElementById("user-password").value;
	placeholderX = document.getElementById("user-id").placeholder;
	placeholderY = document.getElementById("user-password").placeholder;

	if (((placeholderX == "Username") || (placeholderX == "Please insert a username.")) && (x=="")) {
		document.getElementById("user-id").placeholder = "Please insert a username.";
		if ((placeholderY == "Password") || (placeholderY == "Please insert your password.")){
			document.getElementById("user-password").placeholder = "Please insert your password.";

		}
	}
	else if (((placeholderY == "Password") || (placeholderY == "Please insert your password.")) && (y=="")){
		document.getElementById("user-password").placeholder = "Please insert your password.";
		if ((placeholderX == "Username") || (placeholderX == "Please insert a username.")) {
		document.getElementById("user-id").placeholder = "Please insert a username.";
		}
	}

	else {
		window.location.href='UserA/homeScreen.html';
	}

};
function validateSetPasswordFields() {
	//initializes variables
	x = document.getElementById("new-password").value;
	y = document.getElementById("repeat-password").value;
	placeholderX = document.getElementById("new-password").placeholder;
	placeholderY = document.getElementById("repeat-password").placeholder;

	if (((placeholderX == "Password") || (placeholderX == "Please insert a password.")) && (x=="")) {
		document.getElementById("new-password").placeholder = "Please insert a password.";
		if ((placeholderY == "Repeat Password") || (placeholderY == "Please repeat your password.")){
			document.getElementById("repeat-password").placeholder = "Please repeat your password.";

		}
	}
	else if (((placeholderY == "Repeat Password") || (placeholderY == "Please repeat your password.")) && (y=="")){
		document.getElementById("repeat-password").placeholder = "Please repeat your password.";
		if ((placeholderX == "Password") || (placeholderX == "Please insert a password.")) {
		document.getElementById("new-password").placeholder = "Please insert a password.";
		}
	}

	else {
		window.location.href='UserA/homeScreen.html';
	}

};
