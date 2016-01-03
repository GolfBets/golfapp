var rootUrl = 'https://limitless-scrubland-7440.herokuapp.com/';

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
