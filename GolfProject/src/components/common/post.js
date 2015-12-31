var rootUrl = 'http://192.168.1.220:3000/';

module.exports = function(serverRoute, content){
  var url  = `${rootUrl}${serverRoute}`;
//  console.log(url);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(content)
  })
    .then(function(response){
    //  console.log('response successful');
    //  console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.warn(error);
    });
};
