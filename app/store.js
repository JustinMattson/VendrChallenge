import Scotch from "./Models/Scotch.js";

let _state = {
  /** @type {Scotch[]} */
  scotches: [
    new Scotch({
      id: "I1",
      brand: "Laphroaig",
      type: "10 Year Old",
      age: 10,
      abv: 40,
      volume: 50,
      price: 6.66,
      quantity: 10,
      image: "./img/laphroaig.png",
    }),
    new Scotch({
      id: "I2",
      brand: "Bunnahabhain",
      type: "12",
      age: 12,
      abv: 46.3,
      volume: 50,
      price: 22,
      quantity: 10,
      image: "./img/Bunnahabhain.png",
    }),
    new Scotch({
      id: "I3",
      brand: "Caol Ila",
      type: "12",
      age: 12,
      abv: 43,
      volume: 50,
      price: 11.33,
      quantity: 10,
      image: "./img/CaolIla.png",
    }),
    new Scotch({
      id: "I4",
      brand: "Port Ellen",
      type: "15th",
      age: 32,
      abv: 53.9,
      volume: 50,
      price: 200,
      quantity: 10,
      image: "./img/PortEllen.png",
    }),
  ],
};

let _funds = 0;
let _insufficient = true;
let _selection = "";
let _price = 0;
let _quantity = 0;

console.log("hello from store");

class Store {
  /**
   * Provides access to tapplication state data
   */
  get State() {
    return _state;
  }
  get Selection() {
    return _selection;
  }
  get Price() {
    return _price;
  }
  get Quantity() {
    return _quantity;
  }
  get Funds() {
    return _funds;
  }
  get Insufficient() {
    console.log(_insufficient);
    return _insufficient;
  }

  addFunds(funds) {
    _funds += funds;
    _insufficient = _funds < _price || _quantity == 0;
    console.log(_funds);
  }
  selectItem(itemID) {
    let _item = _state.scotches.find((s) => s.id == itemID);
    _selection = _item.brand;
    _price = _item.price;
    _quantity = _item.quantity;
    _insufficient = _funds < _price || _quantity == 0;
  }
}

const STORE = new Store();
export default STORE;
