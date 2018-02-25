var budget=160;//global variable for variable, so when it is editted it is editted everywhere.
var amountSpent2=document.getElementById("amount-spent").innerHTML;
var firstRem=document.getElementById("remaining").innerHTML;
firstRem-=amountSpent2;
function progress()
{
	document.getElementById("progress-tomake").style.backgroundColor="#00E065";
	document.getElementById("cancel-button").value="back";
	var amountSpent=document.getElementById("amount-spent").innerHTML;
	var amSp=parseInt(amountSpent);
	var remaining=document.getElementById("remaining").innerHTML;
	var rem=parseFloat(remaining);
	remaining-=amountSpent;
	document.getElementById('remaining').innerHTML=firstRem;
};
