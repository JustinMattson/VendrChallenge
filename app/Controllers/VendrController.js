import _store from "../store.js";
import VendrService from "../Services/VendrService.js";

let _vendrService = new VendrService();

function _draw() {
  document.getElementById("availableFunds").innerText = _store.Funds.toFixed(2);
  document.getElementById("selection").innerText = _store.Selection;
  document.getElementById("itemPrice").innerText = _store.Price.toFixed(2);
  if (!_store.Insufficient) {
    document.getElementById("vend").classList.remove("btn-danger");
    document.getElementById("vend").classList.add("btn-info");
  } else {
    document.getElementById("vend").classList.remove("btn-info");
    document.getElementById("vend").classList.add("btn-danger");
  }
}

export default class VendrController {
  constructor() {
    console.log("Hello from the vendr Controller");
  }

  addFunds(funds) {
    // $20/click - add to vendrService _funds
    _vendrService.addFunds(funds);
    _draw();
  }

  selectItem(itemID) {
    _vendrService.selectItem(itemID);
    _draw();
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
