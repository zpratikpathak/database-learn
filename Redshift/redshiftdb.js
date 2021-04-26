//redshift.js
var Redshift = require('node-redshift');

var client = {
  user: "awsuser",
  database: "dev",
  password: "Pratik24",
  port: "5439",
  host: "redshift-cluster-1.cqpzrkddcxkb.us-east-2.redshift.amazonaws.com:5439/dev",
};

// The values passed in to the options object will be the difference between a connection pool and raw connection
var redshiftClient = new Redshift(client, {rawConnection: true})

module.exports = redshiftClient;