function PizzaPie() {
  this.pizzaToppings = [];
  this.pizzaCrust = "";
  this.pizzaSize = "";
  this.totalPrice = 0
};
PizzaPie.prototype.calculateCost = function() {
  basePrice = 9;
  toppingBase = 1;
  size = this.pizzaSize;
  alert(size);
  if (this.pizzaCrust === " Pan Crust" ) {
    basePrice += 2;
    alert("Ding!")
  } else if (this.pizzaCrust === " Thin Crust") {
    basePrice += 1;
  }
  if ( this.pizzaSize === " Medium" ) {
    basePrice += 3
    toppingBase *= 1.5;
  } else if ( this.pizzaSize === " Large" ) {
    basePrice += 6
    toppingBase *= 2
  }
  for (i = 0; i <= this.pizzaToppings.length; i += 1 ) {
    basePrice += toppingBase;
  }
  return Math.floor(basePrice);
};

$(document).ready(function() {
  $("button").click(function() {
    var crust = $("input:radio[name=crust]:checked").val();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
    toppings.push($(this).val());
    });
    newPizza = new PizzaPie();
    newPizza.pizzaToppings = toppings;
    newPizza.pizzaSize = size;
    newPizza.pizzaCrust = crust;
    newPizza.totalPrice = newPizza.calculateCost()
    $("#pizza-list").append("<li><h3> Here's Your Next Pizza! </h3></li>");
    $("#pizza-list").append("<li> Delicious " + newPizza.pizzaCrust + ", </li>");
    $("#pizza-list").append("<li> " + newPizza.pizzaSize + " size, </li>");
    $("#pizza-list").append("<li> And a Generous helping of " + newPizza.pizzaToppings.toString() + " on top.</li>");
    $("#pizza-list").append("<li> Yours, for the low price of $" + newPizza.totalPrice.toString() + ".99. What a Deal!");
 });
});
