function getReceipt() {
	var text1 = "";
	var text2 = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+",<br>";
	}
	runningTotal = sizeTotal;
	//console.log(selectedSize+" = $"+sizeTotal+".00");
	//console.log("size text1: "+text1);
	//console.log("subtotal: $"+runningTotal+".00");
	getMeats(runningTotal,text1,text2);
};

function getMeats(runningTotal,text1,text2) {
	var runningTotal = runningTotal;
	var meatsTotal = 0;
	var selectedMeats = [];
	var meatsArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatsArray.length; j++) {
		if (meatsArray[j].checked) {
			selectedMeats.push(meatsArray[j].value);
		}
	}
	var meatsCount = selectedMeats.length;
	if (meatsCount > 1) {
		meatsTotal = (meatsCount - 1);
	} else {
		meatsTotal = 0;
	}
	runningTotal = (runningTotal + meatsTotal);
	for (var j = 0; j < selectedMeats.length; j++) {
			text1 = text1+selectedMeats[j]+"<br>";
			if (meatsCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatsCount = meatsCount - 1;
			} else if (meatsCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatsCount = meatsCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				meatsCount = meatsCount - 1;
			}
	}
	//console.log("total selected meat items: "+meatsCount);
	//console.log(meatsCount+" meat - 1 free meat = "+"$"+meatsTotal+".00");
	//console.log("meats text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	getVeggies(runningTotal,text1,text2);
};	

function getVeggies(runningTotal,text1,text2) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			console.log("selected veggies item: ("+veggiesArray[j].value+")");
			
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount >= 2) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	for (var j = 0; j < selectedVeggies.length; j++) {
			text1 = text1+selectedVeggies[j]+"<br>";
			if (veggiesCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else if (veggiesCount == 2) {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			}
	}
	//console.log("total selected veggies items: "+veggiesCount);
	//console.log(veggiesCount+" veggies - 1 free veggies = "+"$"+veggiesTotal+".00");
	//console.log("veggies text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	getCheese(runningTotal,text1,text2);
};	

function getCheese(runningTotal,text1,text2) {
  var cheeseTotal = 0;
  var selectedCheese = [];
  var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
	}
	text2 = text2+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	//console.log("cheese text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	getSauce(runningTotal,text1,text2);
  };
  
  function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	//console.log("sauce text1: "+text1);
	//console.log("Purchase Total: "+"$"+runningTotal+".00");
	getCrust(runningTotal,text1,text2)
	
};
function getCrust(runningTotal,text1,text2) {
  var CrustTotal = 0;
  var selectedCrust;
  var crustTotal = 0;
  var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + crustTotal + "<br>";
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

// function clearAll() {
	// document.getElementById("frmMenu").reset();
	// document.getElementById("cart").style.opacity=0;
  // };
  
