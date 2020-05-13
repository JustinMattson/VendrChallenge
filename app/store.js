import Scotch from "./Models/Scotch.js"

let _state = {
  /** @type {Scotch[]} */
  // "ID" "Brand", "Type", age, ABV, volume, $USD, quantity
  scotches: [
    new Scotch({
    "I1","Laphroaig","10 Year Old", 10, 40, 50, 6.66, 10, "./img/laphroaig.png"
  }),
  new Scotch({
    "I2",
    "Bunnahabhain",
    "12",
    12,
    46.3,
    50,
    22,
    10,
    "./img/Bunnahabhain.png"
  }),
  new Scotch({
    "I3",
    "Caol Ila",
    "12",
    12,
    43,
    50,
    11.33,
    10,
    "./img/CaolIla.png"
  }),
  new Scotch({
    "I4",
    "Port Ellen",
    "15th",
    32,
    53.9,
    50,
    200,
    10,
    "./img/PortEllen.png"
  }),
  ],
}

class Store {
  get State() {
    return _state;
  }

  addItemToCart(id) {
    _state.scotches.push(id);
  }
}
