var y;
var seen = 0;
var a;

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
  document.getElementById("field_to_replace").placeholder = x;
}
