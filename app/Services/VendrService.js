import Scotch from "../Models/Scotch.js";
// "Brand", "Type", age, ABV, volume, $USD, quantity
let _item1 = new Scotch(
  "Laphroaig",
  "10 Year Old",
  10,
  40,
  50,
  6.66,
  10,
  "./img/Laphroaig.png"
);
let _item2 = new Scotch(
  "Talisker",
  "10",
  10,
  45.8,
  50,
  14,
  10,
  "./img/Talisker.png"
);
let _item3 = new Scotch(
  "Caol Ila",
  "12",
  12,
  43,
  50,
  11.33,
  10,
  "./img/CaolIla.png"
);
let _item4 = new Scotch(
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

export default class VendrService {
  process(funds) {
    _funds += funds;
    console.log(_funds);
  }
  restock() {
    console.log("restock from VendrService.js");
  }
  constructor() {
    console.log("Hello from vendr service");
  }

  get Funds() {
    return _funds;
  }
}
