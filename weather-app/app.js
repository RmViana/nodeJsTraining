// const yargs   = require('yargs');
// const geocode = require('./geocode/geocode');
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
//   geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage){
//       console.log(errorMessage);
//     }else {
//       console.log(JSON.stringify(results, undefined, 2));
//     }
//   });

//137746b7b19794ec20897249e41d05ae

const request = require('request');


request({
  url : 'https://api.darksky.net/forecast/137746b7b19794ec20897249e41d05ae/-23.5524278,-46.5515876',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
  } else {
      console.log('Unable to fetch weather.');
  }
});
