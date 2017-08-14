let Ingredient = function(name, cost) {
  this.name = name;
  this.cost = cost;
}

let cheese = new Ingredient('Cheese', 5);
let pepperoni = new Ingredient('Pepperoni', 10);
let dough = new Ingredient('Dough', 2);
let lettuce = new Ingredient('Lettuce', 3);
let tomato = new Ingredient('Tomato', 4);

let Dish = function(name, price, ingredients) {
  this.name = name;
  this.price = price;
  this.ingredients = ingredients;
}

Dish.prototype.cost = function() {
  return this.ingredients.reduce(function(acc, ingredient) {
    return acc + ingredient.cost;
  }, 10);
}

Dish.prototype.profit = function() {
  return this.price - this.cost();
}

let pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
let salad = new Dish('Salad', 30, [lettuce, cheese, tomato]);

let pluto = {
  name: 'Pluto',
  id: 1
};
let goofy = {
  name: 'Goofy',
  id: 2
};

let Restaurant = function() {
  this.orders = {};
}

Restaurant.prototype.orderDish = function(dish, client) {
  if (!this.orders[client.id]) {
    this.orders[client.id] = [dish];
    return;
  }

  this.orders[client.id].push(dish);
}

Restaurant.prototype.printOrders = function(client) {
  console.log(client.name);
  this.orders[client.id].forEach(function(dish, index) {
    console.log('Order #' + index + ': ' + dish.name + ' - ' + dish.price);
  });
}

Restaurant.prototype.printCheck = function(client) {
  this.printOrders(client);
  console.log('Total: ' + this.totalPrice(client));
}

Restaurant.prototype.totalPrice = function(client) {
  return this.orders[client.id].reduce(function(acc, dish) {
    return dish.price + acc;
  }, 0);
}

let restaurant = new Restaurant();
restaurant.orderDish(pizza, goofy);
restaurant.printCheck(goofy);
restaurant.orderDish(pizza, pluto);
restaurant.orderDish(salad, pluto);
restaurant.printCheck(pluto);
