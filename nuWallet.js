var budget=160;//global variable for variable, so when it is editted it is editted everywhere.
var green;
var loginId;
var amountSpent;
var remaining;
function progress()
{
	document.getElementById("progress-tomake").style.backgroundColor="#00E065";
	document.getElementById("cancel-button").value="back";
	amountSpent=document.getElementById("amount-spent").value;
	remaining=document.getElementById("remaining").value;
	remaining-=amountSpent;
	document.getElementById('remaining').value='You have $'+remaining+' remaining';
};

function register()
{
	loginId=document.getElementById("username").value;
};
