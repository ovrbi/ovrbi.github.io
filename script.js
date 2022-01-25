

function clickLayer(num)
{
	var articles = $("article");
	for (var i = 0; i < 5; i++)
	{
		articles[i].style.display = (i==num)?"block":"none";
	}

}
window.onbeforeprint = function() {
    $("article").css("display", "block");
};
window.onafterprint = function() {
    clickLayer(4);
};


function validateFeedback()
{
	$("p.warning").remove();
	
	let valid = true;
	let title = document.forms["feedback"]["title"].value;
	let email = document.forms["feedback"]["email"].value;
	let number = document.forms["feedback"]["error"].value;
	if (title == "")
	{
		valid = false;
		var elem = document.createElement("p");
		elem.className = "warning";
		elem.appendChild(document.createTextNode("Title required"));
		document.getElementById("titlewrap").appendChild(elem);
	}
	if (email!=""&&!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
	{
		valid = false;
		valid = false;
		var elem = document.createElement("p");
		elem.className = "warning";
		elem.appendChild(document.createTextNode("Invalid email"));
		document.getElementById("emailwrap").appendChild(elem);
	}
	if(number!=""&&(number < -1 || number >1204))
	{
		valid = false;
		valid = false;
		var elem = document.createElement("p");
		elem.className = "warning";
		elem.appendChild(document.createTextNode("Error code out of range"));
		document.getElementById("errorwrap").appendChild(elem);
	}
	
	return valid;
}

