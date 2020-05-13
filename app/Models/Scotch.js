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

  get Template() {
    return /*html*/ `
    <div class="col-12 card text-center shadow order-1 col-md-6 d-flex justify-content-center p-3">
      <div>
        <div id="${this.id}" class="quantity d-flex text-right text-dark"> Available: &nbsp;
          <label id="qtyI1">${this.quantity}</label>&nbsp; @ 50ml
        </div>
        <b><span id="item1cost">${this.price}</span></b>
        <img src=${this.image} alt="ItemImage" />
        <button class="btn btn-button btn-success"
          onclick="app.vendrController.addItemToCart('${this.id}')"
          >${this.id}
        </button>
      </div>
    </div>
    `;
  }
}
