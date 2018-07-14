var assert = require("chai").assert;
var Box = require("@shyftnetwork/shyft_truffle-box");
var Profiler = require("@shyftnetwork/shyft_truffle-compile/profiler.js");
var Resolver = require("@shyftnetwork/shyft_truffle-resolver");
var Artifactor = require("@shyftnetwork/shyft_truffle-artifactor");

// TOOD: Move this to truffle-compile!

describe('profiler', function() {
  var config;

  before("Create a sandbox", function(done) {
    this.timeout(10000);
    Box.sandbox(function(err, result) {
      if (err) return done(err);
      config = result;
      config.resolver = new Resolver(config);
      config.artifactor = new Artifactor(config.contracts_build_directory);
      config.network = "development";
      done();
    });
  });

  it('profiles example project successfully', function(done) {
    Profiler.required_sources(config.with({
      paths: ["./MetaCoin.sol"],
      base_path: config.contracts_directory
    }), function(err, result) {
      if (err) return done(err);

      assert.equal(Object.keys(result).length, 2);
      done();
    });
  });
});
