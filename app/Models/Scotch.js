export default class Scotch {
  constructor(id, brand, type, age, abv, volume, price, quantity, image) {
    this.id = id; //vending machine location
    this.brand = brand;
    this.type = type;
    this.age = age; // years
    this.abv = abv; // %
    this.volume = volume; // ml
    this.price = price; // USD
    this.quantity = quantity; // left in machine
    this.maxQuantity = quantity; // machine capacity
    this.outOfStock = false;
    this.image = image;
    console.log("Hello from Scotch model");
  }
}
