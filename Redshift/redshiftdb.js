//redshift.js
var Redshift = require('node-redshift');

var client = {
  user: "awsuser",
  database: "dev",
  password: "Pratik24",
  port: "5439",
  host: "redshift-cluster-1.cqpzrkddcxkb.us-east-2.redshift.amazonaws.com",
};

// The values passed in to the options object will be the difference between a connection pool and raw connection
var redshiftClient = new Redshift(client, {rawConnection: true})

var pg_query = "CREATE TABLE Persons ( PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255) );";
 
redshiftClient.rawQuery(pg_query, {raw: true})
.then(function(data){
    console.log("Hello")
  console.log(data); 
})
.catch(function(err){
  console.log(err);
});
