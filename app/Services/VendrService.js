import store from "../store.js";
import Scotch from "../Models/Scotch.js";

// PUBLIC
export default class VendrService {
  selectItem(itemID) {
    store.selectItem(itemID);
    //console.log("from vndrService " + itemID);
  }

  addFunds(funds) {
    store.addFunds(funds);
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
}
