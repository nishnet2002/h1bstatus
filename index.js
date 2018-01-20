var getStatus = require('./api/getStatus.js')

//getStatus('WACxxxxxxxx').then(console.log);
process.argv.forEach(function (val, index, array) {
  if (index > 1) {
    getStatus(val).then(function (status) {
       process.stdout.write("Status for '" + val + "' is '" + status + "'\n");	
    });
  }
});


