var redshiftClient = require('./redshiftdb.js');
//console.log(redshiftClient);

redshiftClient.connect(function(err){
    console.log("Hey");
  if(err) throw err;
  else{
    redshiftClient.query('SELECT * FROM "Category"', [options], function(err, data){
      if(err) throw err;
      else{
        console.log(data);
        redshiftClient.close();
      }
    });
  }
});