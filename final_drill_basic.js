function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
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
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1);
};

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggies(runningTotal,text1);
};	

function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			console.log("selected veggies item: ("+veggiesArray[j].value+")");
			text1 = text1+veggiesArray[j].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	console.log("total selected veggies items: "+veggiesCount);
	console.log(veggiesCount+" veggies - 1 free veggies = "+"$"+veggiesTotal+".00");
	console.log("veggies text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1; 
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"
	getCheese(runningTotal,text1);
};	

function getCheese(runningTotal,text1) {
  var cheeseTotal = 0;
  var selectedCheese = [];
  var cheese = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < cheese.length; i++) {
    if (selectedCheese === "Extra Cheese") {
		sizeTotal = 3;
	} else if (selectedCheese === "Regular") {
		sizeTotal = 0;
	} else if (selectedCheese === "No Cheese") {
		sizeTotal = 0;
	}
  }
	runningTotal = (runningTotal + cheeseTotal);
	console.log("cheese text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1; 
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"
	getCrustType(runningTotal,text1);
  };
  
function getCrustType(runningTotal,text1) {
  var CrustTypeTotal = 0;
  var selectedCrustType = [];
  var crustType = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < crustType.length; i++) {
    if (selectedCrustType === "Cheese Stuffed") {
		sizeTotal = 3;
	} else if (selectedCrustType === "Plain") {
		sizeTotal = 0;
	} else if (selectedCrustType === "Garlic Butter") {
		sizeTotal = 0;
	} else if (selectedCrustType === "Spicy") {
		sizeTotal = 0;
	} else if (selectedCrustType === "House Special") {
		sizeTotal = 0;
	}
	
  }
	runningTotal = (runningTotal + CrustTypeTotal);
	console.log("CrustType text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1; 
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"
	getSauceType(runningTotal,text1);
  };
  
function getSauceType(runningTotal,text1) {
	var SauceTypeTotal = 0;
	var selectedSauceType = [];
	var sauceType = document.forms[0];
	var txt = "";
	var i;
	for (i = 0; i < SauceType.length; i++) {
		if (selectedSauceType === "Marinara") {
			sizeTotal = 0;
		} else if (selectedSauceType === "White") {
			sizeTotal = 0;
		} else if (selectedSauceType === "No Sauce") {
			sizeTotal = 0;
		}
	}
	runningTotal = (runningTotal + SauceTypeTotal);
	console.log("SauceType text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1; 
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};