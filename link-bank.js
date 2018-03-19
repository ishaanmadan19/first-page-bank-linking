var y;
var seen = 0;
var a;
var newBudget = [];

function dropDown(){
  document.getElementById("myDropdown").classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.mdl-textfield__input')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  }

function getLinkedBank() {
   y = document.getElementById("us-bank").innerHTML;
}

window.name = window.name + "1";

function checkY(){
  window.name = window.name + "1";
  console.log(window.name);
  if (window.name >= "01111") {
   document.getElementById("bank-linked-field").innerHTML = "US Bank";
   document.getElementById("bank-linked-field").style.top = "8px";
   if (window.name >= "0111111") {
   document.getElementById("card-linked-field").innerHTML = "0160 - VISA";
   document.getElementById("card-linked-field").style.top = "8px";
  }
   //window.name = "011"
  }
}

function zeroWindow() {
  window.name = 0;
}

function selectItem(clickedElement) {
  x = document.getElementById(clickedElement.id).text;
  console.log(x);
  document.getElementById("field_to_replace").value = x;
}

function validateBudget() {
  //initializes variables
  //Getting user typed values for each of the input fields
	budget_value = document.getElementById("budget_value").value;
  //Getting placeholder for each field, to check if empty
	placeholder_category = document.getElementById("field_to_replace").placeholder;

  // Checks to see if fields are not empty
	if (placeholder_category == "Select a category") {
    placeholder_category = "Please select a category";
	}
  else if (budget_value == ""){
    document.getElementById("budget_value").placeholder = "Enter a valid dollar value";
  }
	else {
		 //window.location.href='mainBudgetPage.html';
	}
}

function formatAsDollars(el) {
  el.value = '$' + el.value.replace(/[^\d]/g,'').replace(/(\d\d?)$/,'.$1');
}
//
// function createCustomBudget(placeholder_category,budget_value,exdays) {
//       var d = new Date();
//       d.setTime(d.getTime() + (exdays*24*60*60*1000));
//       var expires = "expires="+ d.toUTCString();
//       document.cookie = "username=" + placeholder_category + ";value=" + budget_value + ";zeroValue=0;expires=Thu, 18 Dec 2020 12:00:00 UTC;path=/";
// }
//
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }
//
// function checkCookies() {
//     var category = getCookie("username");
//     var value = getCookie("value")
//     if (category != "") {
//         // set the custom category in the document
//         document.getElementById("spentUpToNow").text = "$0"
//         document.getElementById("changeableCategory").text = category
//         document.getElementById("maxBudgetValue").text = value
//     }
//     else {}
// }

function insertOwnCategory(clickedElement) {
  selectItem(clickedElement);
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("placeholder", "Enter your own category!");
  x.setAttribute("class","mdl-textfield__input");
  document.body.appendChild(x);
  x.style.position = "relative";
  x.style.left = "57px";
  x.style.top = "-335px";
  x.style.width = "250px";
}


function zeroInputFields () {
  document.getElementById("budget_value").value = "0"
}

function addEditBudget() {
  var $_GET = {};
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
  function decode(s) {
    return decodeURIComponent(s.split("+").join(" "));
  }

  $_GET[decode(arguments[1])] = decode(arguments[2]);
});
console.log("test");
str = $_GET["dollarValue"];
res = str.length;
budgetValue= str.substr(0,(res - 3 ));
if($_GET["category"] == undefined && $_GET["dollarValue"] != "" ) {
  document.getElementById("budget-groceries").innerHTML = budgetValue
  width = parseInt((document.getElementById("sub-progress-groceries").style.width).slice(0,2));
  newPercentage = width/budgetValue;
  document.getElementById("sub-progress-groceries").style.width = newPercentage.toString() + "%";

}
else if ($_GET["category"] != undefined && $_GET["dollarValue"] != "" && $_GET["dollarValue"] != "0")
document.getElementById("hiddenBudget").style.visibility = "visible";
document.getElementsByClassName("hiddenBudgetName")[0].innerHTML = $_GET["category"];
document.getElementsByClassName("hiddenMax")[0].innerHTML = budgetValue
document.getElementsByClassName("hiddenZero")[0].innerHTML = "$0"
document.getElementById("progress-hidden").style.width = "0%";

}
