var Fractal = artifacts.require("Fractal");
var FractalSale = artifacts.require("FractalSale");
module.exports = function (deployer) {
    deployer.deploy(Fractal, 1000000).then(function () {
        // Token price is 0.001 Ether
        var tokenPrice = 1000000000000000;
        return deployer.deploy(FractalSale, Fractal.address, tokenPrice);

    });

};
