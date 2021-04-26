const Pool = require('pg').Pool
const pool = new Pool({
    host: 'redshift-cluster-1.cqpzrkddcxkb.us-east-2.redshift.amazonaws.com',
    user: 'IAM:awsuser',
    password: 'Pratik24',
    database: 'dev',
    port: 5439,
    idleTimeoutMillis: 0,
    max: 10000,
    ssl: true
  })
  
  //redshiftCon =  redshiftPool.connect();
  redShiftCon = pool.connect();