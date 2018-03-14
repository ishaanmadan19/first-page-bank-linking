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
		window.location.href='accountPage.html';
	}

}
