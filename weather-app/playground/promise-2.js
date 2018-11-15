const request = require('request');
var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB5lD9sP7GAKVHkDhgZBl_W2KCT3zIVWFA`,
      json: true
    }, (error, response, body) => {
        if(!error && body.status === "OK"){
            resolve({
              address  : body.results[0].formatted_address,
              latitude : body.results[0].geometry.location.lat,
              longitude : body.results[0].geometry.location.lng,
            });
        } else {
          reject('Unable to fetch that address.');
        }
      });
  });
};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
})
