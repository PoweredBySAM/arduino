const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function () {
  const proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7,
    freq: 100
  });

  // proximity.on("data", function() {
  //   console.log("Proximity: ");
  //   console.log("  cm  : ", this.cm);
  //   console.log("  in  : ", this.in);
  //   console.log("-----------------");
  // });

  proximity.on("change", function() {
    console.log(`Proximity: ${this.cm} cm`);
  });
});
