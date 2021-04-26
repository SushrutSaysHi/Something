var listofpizza = ["Chicken Tandoori Pizza", 
					"Veg Supreme Pizza",
					"Paneer Tikka",
					"Chicken Sausage Pizza", 
					"Pepperoni Pizza"];
					
function getMenu(){
	var htmldata;
	htmldata = "<ol class='menulist'>";
	listofpizza.sort();
	for(var i = 0; i<listofpizza.length; i++){
		htmldata = htmldata+'<li>' + listofpizza[i] + '</li>'
	}
	htmldata=htmldata+"<ol>"
	document.getElementById("list_menu").innerHTML=htmldata;
}

function add_item(){
	var htmldata;
	var item = document.getElementById("add_item").value;
	listofpizza.push(item);
	listofpizza.sort();
	htmldata = "<section class='cards'>"
	for(var i=0; i<listofpizza.length; i++){
		htmldata=htmldata+"<div class='cards'>" + "<img src='images/pizzaImg.png' style='height: 50px; width: 100;'>" + listofpizza[i] + "</div>"
	}
	htmldata=htmldata+"</section>"
	document.getElementById("added_menu").innerHTML = htmldata;
}