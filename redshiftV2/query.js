var mysql      = require('mysql');
var fs         = require('fs');
var connection = mysql.createConnection({
host     : 'redshift-cluster-1.cqpzrkddcxkb.us-east-2.redshift.amazonaws.com',
database : 'dev',
port     : '5439',
user     : 'awsuser',
password : 'Pratik24',
// ssl      : {
// ca : fs.readFileSync('C:/certs/myCA.pem')
// }
});
console.log("Hello world")
connection.connect();
console.log("Hello world2")

connection.query('SELECT * FROM Category', function(err, rows, fields) {
    console.log(rows)

if (err) throw err;
console.log(rows);
});
 
connection.end();