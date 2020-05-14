console.log("Hello from Scotch model");
export default class Scotch {
  constructor(data) {
    this.id = data.id; //vending machine item ID
    this.brand = data.brand;
    this.type = data.type;
    this.age = data.age; // years
    this.abv = data.abv; // %
    this.volume = data.volume; // ml
    this.price = data.price; // USD
    this.quantity = data.quantity; // left in machine
    this.maxQuantity = data.quantity; // machine capacity
    this.outOfStock = false;
    this.image = data.image;
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
