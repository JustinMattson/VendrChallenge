console.log("Hello from Scotch model");
export default class Scotch {
  constructor(data) {
    this.id = data.id; //vending machine item ID
    this.brand = data.brand;
    this.type = data.type;
    this.age = data.age; // years
    this.abv = data.abv; // %
    this.volume = data.volume; // ml
    this.price = data.price.toFixed(2); // USD
    this.quantity = data.quantity; // left in machine
    this.maxQuantity = data.quantity; // machine capacity
    this.outOfStock = false;
    this.image = data.image;
  }

  get Template() {
    return /*html*/ `
    <div
      class="col-12 card text-center shadow order-1 col-md-5 d-flex justify-content-center p-3 mt-3 ml-3">
      <div>
         <div id=${this.id} class="quantity d-flex text-right text-dark">
            Available: &nbsp;<label id="${this.id}">${this.quantity}</label>&nbsp; @ 50ml
          </div>
          <b><span id="item1cost">$${this.price}</span></b>
          <img src="${this.image}" alt="ItemImage" />
          <button
            id=${this.id}
            class="btn btn-button btn-success"
            onclick="app.vendrController.selectItem('${this.id}')"
          >
            ${this.id}
          </button>
      </div>
    </div>
    `;
  }
}
