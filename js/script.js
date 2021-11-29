
function getVal(){
  var pizzaSize = document.getElementById("size").value;
  var pizzaTopping = document.getElementById("toppings").value;
  var pizzaCrust = document.getElementById("crust").value;
  var pizzaNumber = document.getElementById("number").value;
  var num = parseInt(pizzaNumber);

  alert(num);

  
  
  if(pizzaSize == "large"){
    var sizes = 300;
  }
  else if(pizzaSize == "medium"){
    var sizes = 200;

  }
  else if(pizzaSize == "small"){
    var sizes = 100;

  }
  else{
    alert("enter correct value");

  }
  
  
  
  if(pizzaTopping == "pepperoni"){
    var topping = 300;
  }
  else if(pizzaTopping == "supreme"){
    var topping = 350;

  }
  else if(pizzaTopping == "hawaiian"){
    var topping = 300;

  }
  else if(pizzaTopping == "bbq"){
    var topping = 350;

  }
  else if(pizzaTopping == "garlic"){
    var topping = 300;

  }
  else{
    alert("enter correct value");
  }

  if(pizzaCrust == "cheese"){
    var crust = 250;
  }
  else if(pizzaCrust == "Cracker"){
    var crust = 250;

  }
  else if(pizzaCrust == "flatbread"){
    var crust = 300;

  }
  else if(pizzaCrust == "stuffed"){
    var crust = 300;

  }
  else if(pizzaCrust == "thin"){
    var crust = 250;

  }
  else{
    alert("enter correct value");
  }

  var total = topping + crust + sizes;
  
  var final = num*total;

  alert(final);

  
  document.getElementById("demo").innerHTML = final;
}