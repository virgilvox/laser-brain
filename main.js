var osc = require("osc");

var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 9000,
    metadata: true
});

udpPort.open();

udpPort.on("ready", function () {
  udpPort.on("message", function (oscMsg) {

    var address = oscMsg.address;
    if(address.includes("/muse/acc")){
      console.log("Data: ", oscMsg);
    }
  });
});
