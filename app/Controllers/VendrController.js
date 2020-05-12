import VendrService from "../Services/VendrService.js";

let _vendrService = new VendrService();

function _drawMoneyIn() {
  document.getElementById(
    "availableFunds"
  ).innerText = _vendrService.Funds.toString();
}

export default class VendrController {
  constructor() {
    console.log("Hello from the vendr Controller");
  }

  process(funds) {
    // accept $20 denominations only
    // $20/click
    // add to funds available
    _vendrService.process(funds);
    _drawMoneyIn();
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

  restock() {
    // return all quantities to 10
    // set all buttons to active
    _vendrService.restock();
    _draw();
  }
}
