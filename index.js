var rp = require('request-promise');
var cheerio = require('cheerio');
var uriUCIS = 'https://egov.uscis.gov/casestatus/mycasestatus.do?appReceiptNum='

function extractStatus($) {
  return $('div.rows.text-center > h1:first-child').text();
}

function getUri(receiptNumber) {
  return uriUCIS + receiptNumber
}

function getStatus(receiptNumber) {
  var uri = getUri(receiptNumber);
	var options = {
		uri: uri, 
		transform: function (body) {
			return cheerio.load(body);
		}
  };

   return rp(options)
    .then(extractStatus)
    .catch(function (err) {
    	  console.log("Error Occured " + err)  
    });
}


//getStatus('WACxxxxxxxx').then(console.log);

process.argv.forEach(function (val, index, array) {
  if (index > 1) {
    getStatus(val).then(function (status) {
       process.stdout.write("Status for '" + val + "' is '" + status + "'\n");	
    });
  }
});


