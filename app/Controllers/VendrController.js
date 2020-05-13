import VendrService from "../Services/VendrService.js";

let _vendrService = new VendrService();

function _drawMoneyIn() {
  document.getElementById(
    "availableFunds"
  ).innerText = _vendrService.Funds.toFixed(2);
}
// function _drawCartTotal() {
//   document.getElementById.prototype(
//     "cartTotal"
//   ).innerText = _vendrService.cartTotal.toFixed();
// }
// function _drawShelves() {
//   document.getElementsByName("restock").innerText = 10.toString();
// }

export default class VendrController {
  constructor() {
    console.log("Hello from the vendr Controller");
  }

  addFunds(funds) {
    // $20/click - add to vendrService _funds
    _vendrService.addFunds(funds);
    _drawMoneyIn();
  }

  addItemToCart(itemID) {
    _vendrService.addItemToCart(itemID);
    _drawCartTotal();
  }
  vend() {
    // select item
    // subtract from funds available
    // update quantity available (disable if qty = 0)
    // display change
    // clear funds available
    // +3 seconds zero change (ready for next transaction)
    console.log("hello from vend@VendrController");
  }

  restockShelves(value) {
    // return all quantities to 10
    // set all buttons to active
    _vendrService.restockShelves(value);
    _drawShelves();
  }
}
