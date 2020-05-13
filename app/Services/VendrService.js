import store from "../store.js"
import Scotch from "../Models/Scotch.js";

// "ID" "Brand", "Type", age, ABV, volume, $USD, quantity
let _I1 = new Scotch(
  "I1",
  "Laphroaig",
  "10 Year Old",
  10,
  40,
  50,
  6.66,
  10,
  "./img/Laphroaig.png"
);
let _I2 = new Scotch(
  "I2",
  "Bunnahabhain",
  "12",
  12,
  46.3,
  50,
  22,
  10,
  "./img/Bunnahabhain.png"
);
let _I3 = new Scotch(
  "I3",
  "Caol Ila",
  "12",
  12,
  43,
  50,
  11.33,
  10,
  "./img/CaolIla.png"
);
let _I4 = new Scotch(
  "I4",
  "Port Ellen",
  "15th",
  32,
  53.9,
  50,
  200,
  10,
  "./img/PortEllen.png"
);

let _funds = 0;

let _vm = [{ _I1, _I2, _I3, _I4 }];
let _cart = [];
let _tempObj = {};
let _sum = 0;
let _cartTotal = _cart.forEach((i) => (_sum = +i.cost));

export default class VendrService {
  addItemToCart(itemID) {
    // was thinking I could create limit customer to 1each per transaction.
    // moving the selection from the _vm into the cart.
    console.log(_vm));
    console.log("itemID = " + itemID);

    _cart.push(_I1);
    console.log("Cart: " + _cart);

    // _tempObj = Scotch.prototype.id[itemID];
    // //_cart.push(Scotch.prototype.id[itemID]);
    // console.log(_tempObj);
    // console.log(_cart);
    // //_cartTotal =
  }

  addFunds(funds) {
    _funds += funds;
    console.log(_funds.toFixed(2));
  }
  restockShelves(value) {
    // _I1.quantity = value;
    // _I2.quantity = value;
    // _I3.quantity = value;
    // _I4.quantity = value;
    // console.log("restock from VendrService.js");
    // console.log(_I4.quantity);
  }
  constructor() {
    console.log("Hello from vendr service");
  }

  get Funds() {
    return _funds;
  }
}
