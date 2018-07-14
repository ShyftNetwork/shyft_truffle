var command = {
  command: 'publish',
  description: 'Publish a package to the Ethereum Package Registry',
  builder: {},
  run: function (options, done) {
    var Config = require("@shyftnetwork/shyft_truffle-config");
    var Package = require("../package");

    var config = Config.detect(options);
    Package.publish(config, done);
  }
}

module.exports = command;
