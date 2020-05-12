import VendrController from "./Controllers/VendrController.js";

class App {
  constructor() {
    console.log("hello from main.js");
    this.vendrController = new VendrController();
  }
}

window["app"] = new App();
