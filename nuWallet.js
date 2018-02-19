var budget=160;//global variable for variable, so when it is editted it is editted everywhere.
var green;
var loginId;
function progress()
{
	document.getElementById("progress-tomake").style.backgroundColor="green";
	document.getElementById("cancel-button").value="back";
};

function register()
{
	loginId=document.getElementById("username").value;
};
