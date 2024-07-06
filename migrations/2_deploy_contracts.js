var Fractal = artifacts.require("Fractal");

module.exports = function (deployer) {
    deployer.deploy(Fractal, 1000000);
};