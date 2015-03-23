var express = require('express');
var request = require('request');
var fs = require('fs');
// var bodyParser = require('body-parser');
// var sqlite3 = require("sqlite3").verbose();
// var cors = require('cors');


var array2 = [];
var app = express();
// app.use(cors());

app.use(express.static(__dirname + '/public'));



app.get('/CREATE/:indicator',function(req, res)
  {
  if(req.params.indicator!=='favicon.ico')
    {
    var url2 = "http://api.census.gov/data/2013/acs5/profile?get="+req.params.indicator+"&for=zip+code+tabulation+area:*";

      request(url2, function(error, response, body)
      {
        if(!error && response.statusCode === 200)
          {
            var data = JSON.parse(body);

            data.forEach(function(zip)
            {

              if(zip[1].substring(0,1)==='1')
              {
                var datum =
                {
                id: zip[1],
                rate: parseFloat(zip[0])
                }
                array2.push(datum);
              };
            });

            fs.writeFile("./zip_var/"+req.params.indicator+".json",JSON.stringify(array2),function(e)
            {
              console.log("Zip Code Rate done!");
            });

          }
        });
    };

});


var server = app.listen(3000,function()
{
  console.log("listening on port 3000")
});
